import { useReducer, useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "edit":
      return state.map((contact) =>
        contact.id === action.payload.id
          ? action.payload
          : contact
      );

    case "delete":
      return state.filter(
        (contact) => contact.id !== action.payload
      );

    case "toggleFavorite":
      return state.map((contact) =>
        contact.id === action.payload
          ? { ...contact, favorite: !contact.favorite }
          : contact
      );

    default:
      return state;
  }
};

function ContactApp() {
  const [contacts, dispatch] = useReducer(
    reducer,
    initialState
  );

  const [editingContact, setEditingContact] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-8 px-4">

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          Contact Management App
        </h1>

        <ContactForm
          dispatch={dispatch}
          editingContact={editingContact}
          setEditingContact={setEditingContact}
        />

        <ContactList
          contacts={contacts}
          dispatch={dispatch}
          setEditingContact={setEditingContact}
        />

      </div>

    </div>
  );
}

export default ContactApp;