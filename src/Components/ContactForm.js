import React, { Component } from "react";
import { ButtonSubmit, FormLabel, Icon } from "./ContactForm.styled";
import { AiOutlineUserAdd, AiOutlinePhone } from "react-icons/ai";
import PropTypes from "prop-types";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  static defaultProps = {
    onSubmit: PropTypes.func,
  };

  inputValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.inputValue}
        />
        <Icon>
          <AiOutlineUserAdd />
        </Icon>

        <FormLabel htmlFor="number">Number</FormLabel>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.inputValue}
        />
        <Icon>
          <AiOutlinePhone />
        </Icon>
        <ButtonSubmit type={"submit"}>Submit</ButtonSubmit>
      </form>
    );
  }
}
