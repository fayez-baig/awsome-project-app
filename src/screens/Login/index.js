import React, {useState} from 'react';
import LoginComponent from '../../components/LoginComponent';
import Container from './../../components/common/Container';

const Login = () => {
  const [userDetails, setUserDetails] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = (name, value) => {
    setUserDetails({...userDetails, [name]: value});
    if (value !== '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const validateOnSubmit = () => {
    if (!userDetails.Username) {
      setErrors(prev => {
        return {...prev, Username: 'Please Enter Username'};
      });
    }
    if (!userDetails.Firstname) {
      setErrors(prev => {
        return {...prev, Firstname: 'Please Enter Fristname'};
      });
    }
    if (!userDetails.Lastname) {
      setErrors(prev => {
        return {...prev, Lastname: 'Please Enter Lastname'};
      });
    }
    if (!userDetails.Email) {
      setErrors(prev => {
        return {...prev, Email: 'Please Enter Email'};
      });
    }
    if (!userDetails.Password) {
      setErrors(prev => {
        return {...prev, Password: 'Please Enter Password'};
      });
    }
  };

  const onSubmit = () => {
    validateOnSubmit();
    console.log(userDetails);
  };
  return (
    <Container>
      <LoginComponent
        userDetails={userDetails}
        errors={errors}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </Container>
  );
};
export default Login;
