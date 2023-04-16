import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [policeMessage, setPoliceMessage] = useState("");
  const [ambulanceMessage, setAmbulanceMessage] = useState("");
  const [massacreMessage, setMassacreMessage] = useState("");

  const policeOptions = [
    { key: '1', title: 'Ligar para a polícia', onPress: () => console.log('Ligando para a polícia...') },
    { key: '2', title: 'Enviar mensagem predefinida', onPress: () => console.log(`Enviando mensagem para a polícia: ${policeMessage}`) },
    { key: '3', title: 'Enviar minha localização', onPress: () => console.log(`Enviando a sua localização para a polícia: ${policeMessage}`) },
  ];

  const ambulanceOptions = [
    { key: '1', title: 'Ligar para a ambulância', onPress: () => console.log('Ligando para a ambulância...') },
    { key: '2', title: 'Enviar mensagem predefinida', onPress: () => console.log(`Enviando mensagem para a ambulância: ${ambulanceMessage}`) },
    { key: '3', title: 'Enviar minha localização', onPress: () => console.log(`Enviando a sua localização para a ambulância: ${ambulanceMessage}`) },
  ];

  const massacreOptions = [
    { key: '1', title: 'Ligar para o número de emergência (197)', onPress: () => console.log('ligando para a 197!') },
    { key: '2', title: 'Enviar mensagem predefinida', onPress: () => console.log(`Enviando mensagem pre-definida para 197: ${massacreMessage}`) },
    { key: '3', title: 'Enviar minha localização', onPress: () => console.log(`Enviando a sua localização para 197: ${massacreMessage}`) },
  ];

  const navbarItems = [
    { id: 1, text: 'Fale conosco' },
    { id: 2, text: 'Suporte' },
    { id: 3, text: 'Relate Problemas' }
  ];
  

  return (
    


    
    <View style={styles.container}>
       <FlatList 
        data={navbarItems}
         keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
          <View style={styles.navbarContainer}>
            <Text style={styles.navbarText}>{item.text}</Text>
         </View>
        )}/>
      <ScrollView>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="police-badge" size={96} color="gold" />
          <Text style={styles.iconText}>Polícia</Text>
          <View style={[styles.buttonContainer, { flexDirection: 'column' }]}>
            {policeOptions.map(item => (
              <TouchableOpacity style={styles.button} onPress={item.onPress} key={item.key}>
                <Text style={styles.buttonText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={[styles.messageText, { alignSelf: 'flex-start' }]}>Mensagem:</Text>
          <TextInput
            style={styles.messageInput}
            value={policeMessage}
            onChangeText={setPoliceMessage}
          />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="ios-medkit" size={96} color="red" />
          <Text style={styles.iconText}>Ambulância</Text>
          <View style={[styles.buttonContainer, { flexDirection: 'column' }]}>
            {ambulanceOptions.map(item => (
              <TouchableOpacity style={styles.button} onPress={item.onPress}key={item.key}>
                <Text style={styles.buttonText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={[styles.messageText, { alignSelf: 'flex-start' }]}>Mensagem:</Text>
          <TextInput
            style={styles.messageInput}
            value={ambulanceMessage}
            onChangeText={setAmbulanceMessage}
          />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="ios-school-sharp" size={96} color="green" />
          <Text style={styles.iconText}>Massacre em escolas e faculdades</Text>
          <View style={[styles.buttonContainer, { flexDirection: 'column' }]}>
            {massacreOptions.map(item => (
              <TouchableOpacity style={styles.button} onPress={item.onPress}key={item.key}>
                <Text style={styles.buttonText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={[styles.messageText, { alignSelf: 'flex-start' }]}>Mensagem:</Text>
          <TextInput
            style={styles.messageInput}
            value={massacreMessage}
            onChangeText={setMassacreMessage}
          />
        </View>
      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5F7',
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 0,
  },
  iconText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
    width: '90%',
  },
  
  button: {
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    padding: 10,
    margin: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  messageText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 40,

  },
  messageInput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,

  },
  listContainer: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listItemText: {
    fontSize: 18,
    marginLeft: 10,
  },
  touchable: {
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  predefButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'black',
  },
  predefButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  predefButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  navbarContainer: {
    flexDirection: 'row',
    marginTop: 35,
    marginHorizontal: 20,
    backgroundColor: '#e5e5e5',
  },
  footerText: {
    flexDirection: 'row',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});