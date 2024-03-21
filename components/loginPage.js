import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

function LoginPage() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (name, value) => {
    setFormValues(prevFormValues => ({
      ...prevFormValues,
      [name]: value,
    }));

    setIsButtonDisabled(value === '' || formValues.password === '');
  };

  const handleLogin = () => {
    console.log('Email:', formValues.email);
    console.log('Password:', formValues.password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.maincontainer}>
        <View style={styles.screen}>
          <View style={styles.screenContent}>
            <Image source={require('./images/zenius1.png')} style={styles.logo} />
          </View>
          <View style={styles.subScreen}>
            <View style={styles.content}>
              <View style={styles.loginDetails}>
                <Text style={styles.label}>User Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter email"
                  value={formValues.email}
                  onChangeText={text => handleInputChange('email', text)}
                />
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Password</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter password"
                    secureTextEntry
                    value={formValues.password}
                    onChangeText={text => handleInputChange('password', text)}
                  />
                </View>
                <TouchableOpacity
                  disabled={isButtonDisabled}
                  style={[styles.button, isButtonDisabled && styles.disabledButton]}
                  onPress={handleLogin}
                >
                  <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.signupLoginUserprofile}>
                <Text>Already have an account?</Text>
                <Text style={styles.signUserProfileText}>Login</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  screenContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  subScreen: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  loginDetails: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  disabledButton: {
    backgroundColor: 'lightgray',
  },
  signupLoginUserprofile: {
    flexDirection: 'row',
    marginTop: 10,
  },
  signUserProfileText: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  recipe: {
    borderRadius: 10,
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    minWidth: '40%',
    backgroundColor: '#fff',
    padding: 20,
  },
  recipeTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  recipeImage: {
    width: '38%',
    borderRadius: 50,
  },
  details: {
    width: '60%',
    padding: 10,
  },
  recipeName: {
    fontSize: 25,
  },
});

export default LoginPage;
