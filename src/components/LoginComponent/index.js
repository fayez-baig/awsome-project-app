import React, {useState} from 'react';
import Input from '../common/Input/Input';
import {Text} from 'react-native';
import CustomButton from './../common/CustomButton/index';
import {formData} from './formData';

const LoginComponent = ({userDetails, errors, onChange, onSubmit}) => {
  const [secureTextEntry, setsecureTextEntry] = useState(true);

  return (
    <>
      {formData.map(({name, placeHolder, iconPosition}) => (
        <Input
          key={name}
          label={name}
          placeholder={placeHolder}
          iconPosition={name === 'Password' && iconPosition}
          secureTextEntry={name === 'Password' && secureTextEntry}
          icon={
            name === 'Password' && (
              <Text onPress={() => setsecureTextEntry(!secureTextEntry)}>
                {secureTextEntry ? 'Show' : 'Hide'}
              </Text>
            )
          }
          value={userDetails[name] || null}
          onChangeText={value => {
            onChange(name, value);
          }}
          error={errors[name]}
        />
      ))}
      <CustomButton
        onPress={onSubmit}
        primary
        title="Submit"
        disabled={Object.keys(errors).length > 0 ? true : false}
      />
    </>
  );
};

export default LoginComponent;
