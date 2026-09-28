import ContactItem from "./ContactItem";

const ContactList = ({contacts, dispatch, setEditingContact,}) => {
  return (
    <div>
      <h2>Contacts</h2>

      {contacts.length > 0 ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} dispatch={dispatch}
              setEditingContact={setEditingContact}/>
          ))}
        </ul>
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
};

export default ContactList;