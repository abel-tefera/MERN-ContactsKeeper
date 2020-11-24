import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: uuid(),
        name: "Dutch",
        email: "goddamnplan@gmail.com",
        phone: "111-11-1",
        type: "personal",
      },
      {
        id: uuid(),
        name: "John",
        email: "johnjim@gmail.com",
        phone: "222-22-2",
        type: "professional",
      },
      {
        id: uuid(),
        name: "Micah",
        email: "rat@gmail.com",
        phone: "666-66-6",
        type: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
