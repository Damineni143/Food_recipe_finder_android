import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SearchForm = ({ getQuery }) => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    getQuery(search);
  };

  return (
    <View style={styles.searchForm}>
      <TextInput
        style={styles.searchBar}
        value={search}
        placeholder="Search Recipe"
        onChangeText={setSearch}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    searchForm: {
        minHeight: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      searchBar: {
        width: '50%',
        borderWidth: 1,
        borderColor: 'rgb(155, 76, 15)',
        padding: 10,
      },
      searchButton: {
        backgroundColor: 'rgb(155, 76, 15)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'transparent',
      },
      searchButtonText: {
        color: '#fff',
      },
      typeSomething: {
        textAlign: 'center',
      },
});

export default SearchForm;
