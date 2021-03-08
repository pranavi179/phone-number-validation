import React , {useState , useEffect} from 'react';
// import validate from './validateInfo';
import useForm from './useForm';

import './Form.css';

const PhoneForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate 
  );

  function validate(values) {
    let errors = {};
    if(!values.number){
        errors.number="Phone Number required";
    }else if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(values.number)){
errors.number="Phone number is invalid";
}
    return errors;
  }

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         You have <strong>WON</strong> PayTm Gift Card of Rs 200 for <b>placing the order on Man Matters</b>
        </h1>
        <div className='form-inputs' >
          <label className ='form-label'>Phone Number</label>
          <input 
          className='form-input'
          type='text'
          name='number'
          placeholder='Enter Your number'
          value={values.number}
          onChange={handleChange}

        />
        {errors.number && <p>{errors.number}</p>}
        </div>
      
        <button className='form-input-btn' type='submit'
        disabled={values.number < 1}>
       Wow! Get my Paytm Card
        </button>
        <span className='form-input-login'>
         Powered by <a href='https://www.gokwik.co/'>GoKwik</a>
        </span>
      </form>
    </div>
  );
};

export default PhoneForm;


