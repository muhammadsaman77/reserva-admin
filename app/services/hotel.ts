import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

// Fungsi untuk mengambil data hotel beserta fasilitasnya
export const getHotel = async (uid: string) => {
  try {
    // Query untuk mengambil hotel berdasarkan ownerId
    const hotelRef = collection(db, "hotels");
    const q = query(hotelRef, where("ownerId", "==", uid));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const hotelData = querySnapshot.docs[0].data();
      console.log("Hotel Data:", hotelData);

      // Ambil referensi fasilitas dari field facilities
      // const facilitiesRefs = hotelData.facilities; // Array berisi referensi
      // Ambil data untuk setiap fasilitas
      // const facilityPromises = facilitiesRefs.map(async (facilityRef: any) => {
      //   const facilitySnapshot = await getDoc(facilityRef); // Ambil dokumen berdasarkan referensi
      //   if (facilitySnapshot.exists()) {
      //     return facilitySnapshot.data();
      //   }
      //   return null;
      // });

      // // Tunggu semua fasilitas selesai diambil
      // const allFacilities = await Promise.all(facilityPromises);
      // console.log("All Facilities:", allFacilities);

      // Gabungkan data hotel dengan fasilitas
      return {
        hotel: hotelData,
        // facilities: allFacilities.filter((facility) => facility !== null),
      };
    } else {
      console.log("No hotel found for this owner!");
      return null;
    }
  } catch (error) {
    console.error("Error getting hotel data:", error);
  }
};
