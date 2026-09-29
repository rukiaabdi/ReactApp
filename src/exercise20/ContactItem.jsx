const ContactItem = ({
  contact,
  dispatch,
  setEditingContact
}) => {

  return (
    <li className="bg-gray-100 p-4 rounded-lg mb-4 shadow-sm">

      <h3 className="text-xl font-bold mb-2">
        {contact.name} {contact.favorite && "★"}
      </h3>

      <p className="text-gray-700">
        Email: {contact.email}
      </p>

      <p className="text-gray-700 mb-3">
        Phone: {contact.phone}
      </p>

      <div style={{ display: "flex", gap: "10px" }}>

  <button
    onClick={() =>
      dispatch({
        type: "toggleFavorite",
        payload: contact.id
      })
    }
    style={{
      background: "orange",
      color: "white",
      padding: "8px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer"
    }}
  >
    Favorite
  </button>

  <button
    onClick={() => setEditingContact(contact)}
    style={{ background: "blue", color: "white", padding: "8px 15px", border: "none",
      borderRadius: "5px",cursor: "pointer"
    }}
  >
    Edit
  </button>

  <button
    onClick={() =>
      dispatch({ type: "delete", payload: contact.id })
    }
    style={{ background: "red", color: "white", padding: "8px 15px", border: "none",
      borderRadius: "5px",cursor: "pointer" }}
  >
    Delete
  </button>

</div>

  
    </li>
  );
};

export default ContactItem;