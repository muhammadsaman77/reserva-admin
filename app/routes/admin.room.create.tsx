// import { ActionFunction, json } from "@remix-run/node";

// export const action: ActionFunction = async ({ request }) => {
//   const formData = await request.json();
//   // const { error: roomError } = await supabase
//   //   .from("rooms")
//   //   .insert({
//   //     type: formData.type,
//   //     hotel_id: formData.hotel_id,
//   //   })
//   //   .select();

//   if (roomError) {
//     console.log(roomError);
//     return null;
//   }
//   console.log("Add new room successfully");
//   return json({ success: true, message: "Add new room successfully" });
// };
