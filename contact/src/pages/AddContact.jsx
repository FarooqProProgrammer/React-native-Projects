import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Function to handle form submission
    // You can add your own code here to send the form data to your backend
    console.log(name, email, message);
    alert('Form submitted!');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Message"
        value={message}
        onChangeText={text => setMessage(text)}
        multiline={true}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
});

export default AddContact;
