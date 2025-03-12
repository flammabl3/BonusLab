import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getUsers } from './lib/supabase_crud';
import { useEffect, useState } from 'react';

export default function App() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{color: '#065143', fontSize: 30}}>Lab 6</Text>
      <View style={styles.list}>
        {users.map((user) => (
          <View key={user.id} style={styles.listItem}>
            <Text style={{color: '#F9F1F3'}}>{user.name} - {user.age}</Text>
          </View>
        ))}
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '80%',
    padding: '5%',
    backgroundColor: '#129490',
    borderRadius: 7,
  },
  listItem: {
    padding: '4%',
    marginVertical: '1%',
    backgroundColor: '#065143',
    borderRadius: 7,
    color: '#F9F1F3', 
  },
});