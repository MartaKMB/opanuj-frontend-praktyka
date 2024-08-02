import { ChakraProvider } from '@chakra-ui/react'
import SwitchComponent from './SwitchComponent'
import './App.css'

function App() {
  return (
    <ChakraProvider>
      <h1>a11y example</h1>
      <SwitchComponent />
    </ChakraProvider>
  )
}

export default App
