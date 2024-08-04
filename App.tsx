import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const App = () => {
  const [inputText, setInputText] = useState('');

  const handleInputText = (text: string) => {
    setInputText(text);
  };

  console.log(inputText);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang Di Aplikasi Saya!</Text>
      <Text style={styles.subtitle}>
        Ini adalah Aplikasi Sederhana Menggunakan React Native
      </Text>
      <Image
        source={require('./reja.png')} // Gunakan require untuk gambar lokal
        style={styles.image} // Gunakan style terpisah
      />
      <TextInput
        placeholder="Masukkan Teks"
        style={styles.input}
        value={inputText}
        onChangeText={text => handleInputText(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Alert.alert(
            'Halo Nama Saya',
            'Rafael Pandu Sumanti dan saya kelas XRPL 1',
          )
        }>
        <Text style={styles.buttonText}>Klik Saya</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.resetButton]}
        onPress={() => {
          if (inputText.length > 0) {
            setInputText('');
            Alert.alert('Berhasil Reset', 'Teks telah dibersihkan');
          }
        }}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      <Text style={styles.inputLabel}>Anda Mengetik: {inputText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Background warna abu-abu terang
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32, // Ukuran font lebih kecil
    color: '#333', // Warna font abu-abu gelap
    marginBottom: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20, // Ukuran font lebih kecil
    color: '#666', // Warna font abu-abu sedang
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 150, // Ukuran gambar lebih besar
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: '100%', // Lebar penuh untuk input
    maxWidth: 300, // Lebar maksimum
    borderColor: '#ccc', // Warna border abu-abu terang
    borderWidth: 1,
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#fff', // Background input putih
  },
  button: {
    backgroundColor: '#4CAF50', // Warna hijau untuk tombol default
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    width: '100%', // Lebar penuh untuk tombol
    maxWidth: 300, // Lebar maksimum
  },
  resetButton: {
    backgroundColor: '#f44336', // Warna merah untuk tombol reset
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputLabel: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
});

export default App;
