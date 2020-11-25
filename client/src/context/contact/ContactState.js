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
        id: uuid.v4(),
        name: "Dutch",
        email: "goddamnplan@gmail.com",
        phone: "111-11-1",
        type: "personal",
      },
      {
        id: uuid.v4(),
        name: "John",
        email: "johnjim@gmail.com",
        phone: "222-22-2",
        type: "professional",
      },
      {
        id: uuid.v4(),
        name: "Micah",
        email: "rat@gmail.com",
        phone: "666-66-6",
        type: "personal",
      },
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const addContact = (contact) => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  const filterContacts = text => {
    dispatch({type: FILTER_CONTACTS, payload: text})
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
