import React from "react";
import { ContactItem, DeleteButton, Name, Number } from "./ContactList.styled";
import PropTypes from "prop-types";

export const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id}>
        <Name>{name}:</Name>
        <Number>{number}</Number>
        <DeleteButton type="delete" onClick={() => onDelete(id)}>
          Delete
        </DeleteButton>
      </ContactItem>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
