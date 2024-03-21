import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid'; // Ensure you have the appropriate package for generating UUIDs in React Native

const RecipeIngredients = ({ ings }) => {
  return (
    <View style={styles.ingredients}>
      <Text style={styles.ingredientsText}>Ingredients:</Text>
      <View>
        {ings.map(ing => (
          <Text key={uuid.v4()}>{ing.text}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ingredients: {
    marginTop: 10,
  },
  ingredientsText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ingredients :{
    
    ul: {
        paddingTop: 5,
        paddingLeft: 20,
    }
}
});

export default RecipeIngredients;
