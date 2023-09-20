import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta Luz',
    value: '300,00',
    date: '20/09/2023',
    type: 0
  },
  {
    id: 2,
    label: 'Boleto conta Água',
    value: '90,00',
    date: '17/09/2023',
    type: 0
  },
  {
    id: 3,
    label: 'Salário',
    value: '3000,00',
    date: '20/09/2023',
    type: 1
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Minhas Finanças" />
      <Balance balance='6.000,00' expenses='2.500,00' />
      <Actions />
      <Text style={styles.title}>Últimas Movimentações</Text>
      <FlatList 
        style={styles.list} 
        data={list} 
        keyExtractor={(item) => String(item.id)} 
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Movements data={item} /> } 
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});