import ContactItem from "./ContactItem";

const ContactList = ({
  contacts,
  dispatch,
  setEditingContact
}) => {

  return (
    <div className="mt-8">

      <h2 className="text-2xl font-bold mb-4">
        Contacts
      </h2>

      {contacts.length > 0 ? (

        <ul className="space-y-3">

          {contacts.map((contact) => (

            <ContactItem
              key={contact.id}
              contact={contact}
              dispatch={dispatch}
              setEditingContact={setEditingContact}
            />

          ))}

        </ul>

      ) : (

        <p className="text-center text-gray-500">
          No contacts available.
        </p>

      )}

    </div>
  );
};

export default ContactList;