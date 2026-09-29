import { useState, useEffect } from "react";

const ContactForm = ({
  dispatch,
  editingContact,
  setEditingContact
}) => {

  const [contact, setContact] = useState(
    editingContact || {
      id: null,
      name: "",
      email: "",
      phone: ""
    }
  );

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
      setIsEditing(true);
    }
  }, [editingContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContact({
      ...contact,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contact.name && contact.email && contact.phone) {

      if (isEditing) {

        dispatch({
          type: "edit",
          payload: contact
        });

        setIsEditing(false);
        setEditingContact(null);

      } else {

        dispatch({
          type: "add",
          payload: {
            ...contact,
            id: Date.now(),
            favorite: false
          }
        });
      }

      setContact({
        id: null,
        name: "",
        email: "",
        phone: ""
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">

      <h2 className="text-2xl font-bold mb-4">
        {isEditing ? "Edit Contact" : "Add New Contact"}
      </h2>

      <div className="mb-3">
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          placeholder="Enter name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          placeholder="Enter phone"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

     <button
  type="submit"
  style={{
    backgroundColor: "purple",
    color: "white",
    padding: "10px 24px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }}
>
  {isEditing ? "Update" : "Add"}
</button>

    </form>
  );
};

export default ContactForm;