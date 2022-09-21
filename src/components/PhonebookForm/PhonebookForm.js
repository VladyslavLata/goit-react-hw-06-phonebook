import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { LabelName, AddButton } from './Phonebook.styled';
import styled from 'styled-components';

const ErrorText = styled(ErrorMessage)`
  color: red;
`;

const schema = yup.object().shape({
  name: yup
    .string()
    .strict()
    .trim()
    .min(2)
    .max(30)
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces'
    )
    .required(),
  number: yup
    .string()
    .strict()
    .trim()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{2}\)?)?$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

const initialValues = {
  name: '',
  number: '',
};

export const PhonebookForm = ({ onAddContact, onReviewName }) => {
  const handleSubmit = (values, actions) => {
    if (onReviewName(values.name)) {
      alert(`${values.name} is already in contacts.`);
      return;
    }
    onAddContact({ ...values, id: nanoid() });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">
          <LabelName>Name</LabelName>
          <Field autoComplete="off" type="text" name="name" />
          <ErrorText component="p" name="name" />
        </label>
        <label htmlFor="number">
          <LabelName>Number</LabelName>
          <Field type="tel" name="number" />
          <ErrorText component="p" name="number" />
        </label>
        <AddButton type="submit">Add contact</AddButton>
      </Form>
    </Formik>
  );
};

PhonebookForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  onReviewName: PropTypes.func.isRequired,
};
