/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import styles from './styles';
const RED = '#ed3b3b';
const FormInputItem = (props) => {
  const {
    item: {name, placeholder, rules},
    control,
    errors,
    keyboard,
  } = props;

  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 16, fontWeight: '500'}} t>
            {placeholder}
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            borderWidth: errors ? 2 : 1,
            padding: 5,
            borderRadius: 10,
            borderColor: errors ? RED : '#898989',
          }}>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                // eslint-disable-next-line quotes
                keyboardType={keyboard !== undefined ? keyboard : 'default'}
              />
            )}
            name={name}
            rules={rules}
            defaultValue=""
          />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <Text style={{color: RED}}>{errors}</Text>
      </View>
    </View>
  );
};

export default FormInputItem;
