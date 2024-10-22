import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import Main from './src/screens/main'
import { MyStore } from './src/redux/mystore'

const App = () => {
  return (
    <Provider store={MyStore}>
      <Main/>

    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})