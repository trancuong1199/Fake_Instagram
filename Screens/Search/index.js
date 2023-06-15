import { React, useContext, useState } from 'react';
import { View, SafeAreaView, Image, Pressable, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Accounts } from '../../Data/Data';
import { StoreContext } from '../../Components/Store';
import styles from './stylesSearch';

const Search = () => {
  const { color } = useContext(StoreContext);
  const navigation = useNavigation();
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState(Accounts);

  const handleSearch = (query) => {
        console.log(query);
      setSearchInput(query);
      const filteredData = Accounts.filter((item) => item.name.includes(query));
      setFilteredData(filteredData);
  };

  return (
      <SafeAreaView style={[styles.container, { backgroundColor: color.black }]}>
          <ScrollView>
              <View style={styles.search}>
                  <TextInput
                      style={[styles.inputSearch, { backgroundColor: color.inputSearch }]}
                      onChangeText={handleSearch}
                      value={searchInput}
                      placeholder="Search..."
                      placeholderTextColor="#6B6B6B"
                  />
                  <Ionicons name="search-outline" size={28} marginRight={5} style={styles.inputIconSearch} />
              </View>
              <View style={{flexDirection: 'row'}}>
                  <View style={{ marginTop: -15, paddingRight: 3 }}>
                      {filteredData.map((value, index) =>
                          value.id % 2 === 0 ? (
                              <Pressable
                                  onPress={() => navigation.navigate('Personal', { itemId: value.id })}
                                  key={index}
                              >
                                  <Image width={200} height={200} source={{ uri: value.image }} />
                              </Pressable>
                          ) : (
                              <Pressable
                                  onPress={() => navigation.navigate('Personal', { itemId: value.id })}
                                  key={index}
                              >
                                  <Image width={200} height={330} source={{ uri: value.image }} />
                              </Pressable>
                          ),
                      )}
                  </View>
                  <View style={{ marginTop: -15 }}>
                      {filteredData.reverse().map((value, index) =>
                          value.id % 3 === 0 ? (
                              <Pressable
                                  onPress={() => navigation.navigate('Personal', { itemId: value.id })}
                                  key={index}
                              >
                                  <View key={index}>
                                      <Image width={200} height={200} source={{ uri: value.image }} />
                                  </View>
                              </Pressable>
                          ) : (
                              <Pressable
                                  onPress={() => navigation.navigate('Personal', { itemId: value.id })}
                                  key={index}
                              >
                                  <View key={index}>
                                      <Image width={200} height={330} source={{ uri: value.image }} />
                                  </View>
                              </Pressable>
                          ),
                      )}
                  </View>
              </View>
          </ScrollView>
      </SafeAreaView>
  );
};

export default Search;
