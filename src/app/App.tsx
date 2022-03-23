import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import CodePush from 'react-native-code-push'

const App = () => {
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black'
      }}
    >
      <Text style={{ fontSize: 25, color: 'white' }}>Versão Black/White</Text>
    </SafeAreaView>
  )
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE
})(App)
