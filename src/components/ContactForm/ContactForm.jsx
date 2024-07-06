import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { useId } from "react";

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({ id: nanoid(), name: values.name, number: values.number });
    actions.resetForm();
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.inputWrapper}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.input}
          />
          <ErrorMessage
            className={css.ErrorMessage}
            name="name"
            component="span"
          />
        </div>
        <div className={css.inputWrapper}>
          <label htmlFor={phoneFieldId}>Number</label>
          <Field
            type="tel"
            name="number"
            id={phoneFieldId}
            className={css.input}
          />
          <ErrorMessage
            className={css.ErrorMessage}
            name="number"
            component="span"
          />
        </div>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
