import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MemberForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    membership: Yup.string().required('Membership type is required')
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', membership: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />

        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <label htmlFor="membership">Membership</label>
        <Field name="membership" as="select">
          <option value="">Select Membership</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </Field>
        <ErrorMessage name="membership" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default MemberForm;
