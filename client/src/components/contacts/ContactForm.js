import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [phone, setPhone] = useState("");

  const contactContext = useContext(ContactContext);
  const { current, clearCurrent, addContact, updateContact } = contactContext;
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const clearAll = () => {
    clearCurrent();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current) {
      updateContact(contact);
    } else {
      addContact(contact);
    }
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
    clearAll();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2 className="text-primary">
          {current ? "Edit Contact" : "Add Contact"}
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={onChange}
          required
        />
        <h5>Contact Type</h5>
        <input
          type="radio"
          name="type"
          value="personal"
          checked={type === "personal"}
          onChange={onChange}
        />{" "}
        Personal{" "}
        <input
          type="radio"
          name="type"
          value="professional"
          checked={type === "professional"}
          onChange={onChange}
        />{" "}
        Professional{" "}
        <div>
          <input
            type="submit"
            value={current ? "Update Contact" : "Add Contact"}
            className="btn btn-primary btn-block"
          />
        </div>
        {current && (
          <div>
            <button className="btn btn-light btn-block" onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
