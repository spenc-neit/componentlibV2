import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Box} from './library'
import { Text } from './library'
import { Button } from './library'
import { MyAwesomeComponent } from './library'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyAwesomeComponent />
    </>
  )
}

export default App
