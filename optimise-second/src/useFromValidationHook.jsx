import { useState, useCallback } from 'react';

const useForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const validate = useCallback(() => {
    let newErrors = {};
    if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
    }
    if (!formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      newErrors.email = 'Invalid email address';
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = useCallback((e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }, [formData]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  }, [formData, validate]);

  return { formData, errors, handleChange, handleSubmit };
};

export default useForm;
