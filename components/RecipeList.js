import React from 'react';
import { View, StyleSheet } from 'react-native';
import Recipe from './Recipe';
import uuid from 'react-native-uuid'; // Ensure you have the appropriate package for generating UUIDs in React Native

const RecipeList = ({ recipes }) => {
  return (
    <View style={styles.recipeList}>
      {recipes.map(recipe => (
        <Recipe key={uuid.v4()} recipe={recipe} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
    recipeList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 20,
        margin: 20,
      },
      '@media (max-width: 500px)': {
        recipeList: {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
      },
      '@media (max-width: 500px)': {
        recipeList: {
          gridTemplateColumns: 'repeat(1, 1fr)',
          margin: 12,
          gap: 15,
        },
      },
});

export default RecipeList;
