import { useState, useEffect } from "react";

const ContactForm = ({dispatch,editingContact, setEditingContact,}) => {
  const [contact, setContact] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
      setIsEditing(true);
    }
  }, [editingContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContact({ ...contact, [name]: value, });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      dispatch({ type: "edit", payload: contact, });

      setEditingContact(null);
      setIsEditing(false);
    } else {
      dispatch({ type: "add", payload: {   ...contact,
          id: Date.now(),favorite: false, },
      });
    }

    setContact({
      id: null,
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isEditing ? "Edit Contact" : "Add New Contact"}</h2>

      <div>
        <label>Name:</label>
        <input type="text" name="name" value={contact.name} onChange={handleChange}
          required />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" name="email" value={contact.email} onChange={handleChange}
          required/>
      </div>

      <div>
        <label>Phone:</label>
        <input type="text" name="phone" value={contact.phone} onChange={handleChange}
          required/>
      </div>

      <button type="submit">
        {isEditing ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default ContactForm;