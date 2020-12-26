import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import styles from './styles';
import FormItem from '../../Components/FormItem';
import {useForm} from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = (props) => {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = async (data) => {
    try {
      await AsyncStorage.setItem('userInputData', JSON.stringify(data));
      // eslint-disable-next-line no-alert
      alert('data saved successfully');
    } catch (e) {
      // saving error
      console.log(e);
    }
  };
  const Data = [
    {
      name: 'firstName',
      placeholder: 'First Name',
      rules: {required: 'First Name is must '},
    },
    {
      name: 'title',
      placeholder: 'Title',
      rules: {required: "Title can't be blank ", minLength: 4},
    },
    {
      name: 'addressOne',
      placeholder: 'Address 1',
      rules: {required: "address 1 can't be blank"},
    },
    {
      name: 'addressTwo',
      placeholder: 'Address 2',
      rules: {},
    },
    {
      name: 'city',
      placeholder: 'City',
      rules: {required: "City can't be blank"},
    },
    {
      name: 'state',
      placeholder: 'State',
      rules: {required: "State can't be blank"},
    },
    {
      name: 'zip',
      placeholder: 'ZIP',
      rules: {
        required: "City can't be blank",
        pattern: {
          value: /^[0-9]*$/,
          message: 'Zip should be only number', // JS only: <p>error message</p> TS only support string
        },
      },
      keyboard: 'numeric',
    },
    {
      name: 'officeTel',
      placeholder: 'Office Tele',
      rules: {},
      keyboard: 'numeric',
    },
    {
      name: 'cellTel',
      placeholder: 'Cell Tele',
      rules: {
        required: "cell number can't be blank",
        pattern: {
          value: /^[0-9]*$/,
          message: 'cell should be only number', // JS only: <p>error message</p> TS only support string
        },
        minLength: {
          value: 10,
          message: 'cell should be of 10 digit', // JS only: <p>error message</p> TS only support string
        },
        maxLength: {
          value: 10,
          message: 'cell should be of 10 digit', // JS only: <p>error message</p> TS only support string
        },
      },
      keyboard: 'numeric',
    },
    {
      name: 'email',
      placeholder: 'Email',
      rules: {
        required: 'Email is must ',
        pattern: {
          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: 'Enter Valid Email Address', // JS only: <p>error message</p> TS only support string
        },
      },
      keyboard: 'numeric',
    },
    {
      name: 'url',
      placeholder: 'URL',
      rules: {
        required: 'URL is must',
        pattern: {
          value: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
          message: 'Enter Valid URL', // JS only: <p>error message</p> TS only support string
        },
      },
    },
    {
      name: 'customerContact',
      placeholder: 'Customer Contact',
      rules: {
        required: "cell number can't be blank",
        pattern: {
          value: /^[0-9]*$/,
          message: 'cell should be only number', // JS only: <p>error message</p> TS only support string
        },
        minLength: {
          value: 10,
          message: 'cell should be of 10 digit', // JS only: <p>error message</p> TS only support string
        },
        maxLength: {
          value: 10,
          message: 'cell should be of 10 digit', // JS only: <p>error message</p> TS only support string
        },
      },
      keyboard: 'numeric',
    },
  ];
  const [errorState, setErrorState] = useState({});
  useEffect(() => {
    setErrorState(errors);
  }, [errors]);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>G.B.E.T</Text>
      <FlatList
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}
        data={Data}
        extraData={errors}
        renderItem={({item}) => {
          return (
            <FormItem
              control={control}
              item={item}
              errors={
                errorState
                  ? errorState[item.name] !== undefined
                    ? errorState[item.name].message
                    : null
                  : null
              }
            />
          );
        }}
      />
      <Button
        title="Submit"
        onPress={handleSubmit(onSubmit, (error) => console.log(error))}
      />
    </View>
  );
};

export default Home;
