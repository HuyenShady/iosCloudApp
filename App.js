import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function App() {
  return (
	<SafeAreaProvider>
    		<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      			<Text>Hello Huyền! Wellcome to iosCloudApp</Text>
    		</SafeAreaView>
 	</SafeAreaProvider>
  );
}
