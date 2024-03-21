import React from 'react';
import { View, Text, Image } from 'react-native';
import RecipeIngredients from './RecipeIngredients';
import styles from './recipeStyles';

const Recipe = ({ recipe }) => {
  return (
    <View style={styles.recipe}>
      <View style={styles.recipeTop}>
        <Image source={{ uri: recipe.recipe.image }} style={styles.recipeImage} />

        <View style={styles.details}>
          <Text style={styles.recipeName}>{recipe.recipe.label}</Text>
          <Text><Text style={{ fontWeight: 'bold' }}>Calories:</Text> {recipe.recipe.calories}</Text>
        </View>
      </View>

      <View style={styles.recipeBottom}>
        <RecipeIngredients ings={recipe.recipe.ingredients} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
  
export default Recipe;
