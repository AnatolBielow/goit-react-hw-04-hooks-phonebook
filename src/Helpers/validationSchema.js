import * as yup from "yup";

const nameValidation =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberValidation =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

export const schema = () => {
  return yup.object().shape({
    name: yup
      .string()
      .min(2, "Name must consist of at least 2 characters")
      .max(70, "Name is too long!")
      .required("Required")
      .matches(
        nameValidation,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      ),
    number: yup
      .string()
      .required("Required")
      .matches(
        numberValidation,
        "Phone number must be digits and can start with +"
      ),
  });
};
