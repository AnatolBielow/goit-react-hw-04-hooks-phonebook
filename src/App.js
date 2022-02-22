import React, { useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContactList } from "./Components/ContactList";
import ContactForm from "./Components/ContactForm";
import { formattedNumber } from "./Helpers/formattedNumber";
import useLocalStorage from "./hooks/useLocalStorage";
import { Filter } from "./Components/Filter";
import {
  Phonebook,
  PhonebookContainer,
  Title,
  TitleContacts,
} from "./Components/Base.styled";

export default function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState("");

  const handleSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number: formattedNumber(number),
    };

    for (let i = 0; i < contacts.length; i++) {
      const normalizedName = contacts[i].name.toLowerCase();
      const oldNumber = contacts[i].number;

      if (newContact.name.toLowerCase() === normalizedName) {
        return toast.error(`Sorry, but ${name} is already in contacts!`);
      }
      if (newContact.number === oldNumber) {
        return toast.error(
          `Sorry, but ${number} belongs to ${contacts[i].name}!`
        );
      }
    }
    setContacts((prevContacts) => [newContact, ...prevContacts]);

    resetFilter();
    toast.success(`Contact ${name} is added to Phoonebook!`);
  };

  const onSearching = (e) => {
    setFilter(e.target.value);
  };

  const resetFilter = () => {
    setFilter("");
  };

  const handleDelete = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
    toast.info(`Contact is deleted`);
  };

  const normalizedFilterName = filter.toLowerCase();
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilterName)
  );

  return (
    <Phonebook>
      <ToastContainer />
      <PhonebookContainer>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={handleSubmit} />
      </PhonebookContainer>
      <PhonebookContainer>
        <TitleContacts>Contacts</TitleContacts>
        {contacts.length > 0 ? (
          <div>
            <Filter value={filter} onChange={onSearching} />
            <ContactList contacts={filterContacts} onDelete={handleDelete} />
          </div>
        ) : (
          <div>This is no contacts in Phonebook</div>
        )}
      </PhonebookContainer>
    </Phonebook>
  );
}
