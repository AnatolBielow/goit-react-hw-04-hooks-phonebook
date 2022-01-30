import { Formik, Field, ErrorMessage, Form } from "formik";
import "react-phone-input-2/lib/style.css";
import "react-phone-input-2/lib/style.css";
import { ButtonSubmit, Error, FormLabel, Icon } from "./ContactForm.styled";
import { AiOutlineUserAdd, AiOutlinePhone } from "react-icons/ai";
import PropTypes from "prop-types";

export const ContactForm = ({ initialValues, onSubmit, validationSchema }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Field name="name" />
        <Icon>
          <AiOutlineUserAdd />
        </Icon>
        <ErrorMessage name="name">{(msg) => <Error>{msg}</Error>}</ErrorMessage>
        <ErrorMessage name="email"></ErrorMessage>
        <FormLabel htmlFor="number">Number</FormLabel>
        <Field name="number" />
        <Icon>
          <AiOutlinePhone />
        </Icon>
        <ErrorMessage name="number">
          {(msg) => <Error>{msg}</Error>}
        </ErrorMessage>

        <ButtonSubmit type="submit">Submit</ButtonSubmit>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validationSchema: PropTypes.func.isRequired,
};
