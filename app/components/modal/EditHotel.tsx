import { Button, Label, Modal, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";

import { Hotel } from "~/types/hotel";

// const options = [
//   { value: "fox", label: "🦊 Fox" },
//   { value: "Butterfly", label: "🦋 Butterfly" },
//   { value: "Honeybee", label: "🐝 Honeybee" },
// ];

export default function EditHotel({
  openModal,
  onCloseModal,
  data,
}: {
  openModal: boolean;
  onCloseModal: () => void;
  data: Hotel;
}) {
  const [values, setValues] = useState({
    name: data.name,
    description: data.description,
    price: data.price,
  });
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  // const onChangeSelect = (value: SelectValue) => {
  //   setValues({
  //     ...values,

  //   })
  // }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetch("/admin/room/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.name,
      }),
    });
    onCloseModal();
  };
  return (
    <Modal
      show={openModal}
      size="lg"
      onClose={() => {
        onCloseModal();
        setValues({
          name: data.name,
          description: data.description,
          price: data.price,
        });
      }}
      popup
    >
      <Modal.Header />
      <Modal.Body>
        <form method="post" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Edit hotel data
            </h3>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Hotel name" />
              </div>
              <TextInput
                id="name"
                name="name"
                placeholder="Deluxe"
                value={values.name}
                onChange={(event) => onChange(event)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description" value="Hotel description" />
              </div>
              <Textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Deluxe"
                value={values.description}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="price" value="Hotel price per night" />
              </div>
              <TextInput
                id="price"
                name="price"
                placeholder="100000"
                value={values.price}
                onChange={(event) => onChange(event)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="price" value="Hotel price per night" />
              </div>
              {/* <Select
                onChange={(value) => onChangeSelect(value)}}
                primaryColor="indigo"
            
                value={values.animal}
                options={options}
              /> */}
            </div>
            <div className="w-full flex justify-end">
              <Button type="submit">Save room</Button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
