import React from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
	<SafeAreaProvider>
    		<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      			<Text>Hello Huyền! Wellcome to iosCloudApp</Text>
    		</SafeAreaView>
 	</SafeAreaProvider>
  );
}
