import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

export default function AddRoom({
  openModal,
  onCloseModal,
  hotelId,
}: {
  openModal: boolean;
  onCloseModal: () => void;
  hotelId: number;
}) {
  const [values, setValues] = useState({
    type: "",
  });
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetch("/admin/room/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: values.type,
        hotel_id: hotelId,
      }),
    });
    onCloseModal();
  };
  return (
    <>
      <Modal
        show={openModal}
        size="md"
        onClose={() => {
          onCloseModal();
          setValues({ type: "" });
        }}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <form method="post" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Add new room
              </h3>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="type" value="Type room" />
                </div>
                <TextInput
                  id="type"
                  name="type"
                  placeholder="Deluxe"
                  value={values.type}
                  onChange={(event) => onChange(event)}
                  required
                />
              </div>

              <div className="w-full flex justify-end">
                <Button type="submit">Save room</Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
