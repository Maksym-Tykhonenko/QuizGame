
import React from 'react';
import {
  Text,
  View,
} from 'react-native';


const App=()=> {
 
  return (
    <View style={{ flex:1 , alignItems: 'center', justifyContent: 'center'}}>
      <Text>QUIZ GAME !!!!!</Text>
    </View>
  );
}

{/**
<WebView
  originWhitelist={['*']}
  // Інші властивості WebView
  onShouldStartLoadWithRequest={(event) => {
    const { url } = event;
    if (url.startsWith('mailto:')) {
      // Якщо це посилання на пошту (mailto), відкрийте його в іншому додатку
      Linking.openURL(url);
      return false; // Повертаємо false, щоб заборонити завантаження URL в WebView
    } else if (url.includes('ваш_префікс_для_криптогаманця')) {
      // Якщо це посилання на криптогаманець, відкрийте його в іншому додатку
      Linking.openURL(url);
      return false; // Повертаємо false, щоб заборонити завантаження URL в WebView
    } else {
      return true; // Всі інші URL можна завантажувати в WebView
    }
  }}
/>

*/}


export default App;
