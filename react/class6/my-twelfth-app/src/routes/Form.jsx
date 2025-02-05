import { useState } from 'react';
import { Form } from 'react-router-dom';

const UserForm = () => {
  const [formData, setFormData] = useState({ name: '', job: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const { name, job } = formData;
  return (
    <Form method="post" id="user-form">
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <label htmlFor="job">Job: </label>
      <input type="text" name="job" value={job} onChange={handleChange} />
      <input type="submit" value="Submit" />
    </Form>
  );
};

export default UserForm;
