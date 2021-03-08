import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({number:'' }) 
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

// Local Storage


// const localData = localStorage.getItem('value')
// return localData ? JSON.parse(localData): [] ; 

const [value, setValue] = useState([], () => {
    const localData = localStorage.getItem('value')
      return localData ? JSON.parse(localData): [] ; 
  })
  useEffect(() => {
    localStorage.setItem('value', JSON.stringify(values))
  }, [values])



  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );


  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
