import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  // If device is on web browser, use iframe
  return Platform.OS === "web" ? (
    <iframe src="http://localhost:8000/cesium.html" height={'100%'} width={'100%'} />
  ) : (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "http://localhost:8000/cesium.html" }}
        style={{marginTop: 22, flex: 1}}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
