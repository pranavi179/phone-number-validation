import React, { useState } from 'react';
import './Form.css';
import PhoneForm from './PhoneForm';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img'
           src=
           'https://assetscdn1.paytm.com/images/catalog/product/G/GI/GIFTESTGIFT72065625EDE47D/0..png' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <PhoneForm submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
