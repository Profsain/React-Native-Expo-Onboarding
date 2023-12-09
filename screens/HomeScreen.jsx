import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-fuchsia-700 text-3xl">GoNow</Text>

      <View>
        <Image
          source={require("../images/team.png")}
          className="w-72 h-72 object-contain m-4"
        />
      </View>

      <View>
              <Button title='Get Started'/>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen