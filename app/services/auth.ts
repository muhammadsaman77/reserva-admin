import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "./firebase";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
export const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    const user = auth.currentUser;
    if (!user) throw new Error("No authenticated user found.");

    const userSnapshot = await getUserSnapshot(user.uid);
    if (!userSnapshot.exists()) return;

    const roles = userSnapshot.data().roles;
    if (!["owner", "superadmin"].includes(roles)) {
      logout();
    }
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export const getUserSnapshot = (uid: string) => {
  const userDocRef = doc(db, "users", uid);
  return getDoc(userDocRef);
};

export const checkAuth = async () => {
  const user = auth.currentUser;

  if (!user) {
    return null;
  }
  const userSnapshot = await getUserSnapshot(user.uid);
  if (userSnapshot.exists()) {
    return {
      roles: userSnapshot.data().roles,
      uid: user.uid,
    };
  }
  return null;
};

export const deleteAccount = async (email: string, password: string) => {
  try {
    // Sign in the user
    await signInWithEmailAndPassword(auth, email, password);

    const user = auth.currentUser;

    // Check if the user is authenticated
    if (!user) {
      throw new Error("User is not authenticated");
    }

    // Fetch the user document snapshot
    const userSnapshot = await getUserSnapshot(user.uid);
    if (userSnapshot.exists()) {
      // Construct the correct document reference and delete the document
      const userDocRef = doc(userSnapshot.ref.firestore, "users", user.uid);
      await deleteDoc(userDocRef);
    }

    // Delete the Firebase Authentication user
    await user.delete();
  } catch (error) {
    console.error("Error deleting account:", error);
  }
};
