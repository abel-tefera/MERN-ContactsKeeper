import React, { useContext, Fragment } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Contacts list...</h4>;
  }

  return (
    <Fragment>
      {filtered
        ? filtered.map((contact) => (
            <h3>
              <ContactItem key={contact.id} contact={contact} />
            </h3>
          ))
        : contacts.map((contact) => (
            <h3>
              <ContactItem key={contact.id} contact={contact} />
            </h3>
          ))}
    </Fragment>
  );
};

export default Contacts;
