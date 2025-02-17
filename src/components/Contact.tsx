

import React, { useState } from 'react';

// Define types for form data and errors
type FormData = {
  name: string;
  email: string;
  message: string;
};

type Errors = {
  name: string;
  email: string;
  message: string;
};

// Custom hook for form handling
const useForm = (initialState: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<Errors>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors: Errors = { name: '', email: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return {
    formData,
    errors,
    handleChange,
    validateForm,
    setErrors,
  };
};

// Contact component
const Contact = () => {
  const { formData, errors, handleChange, validateForm } = useForm({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section className='contact'>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span>{errors.message}</span>}
        </label>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
