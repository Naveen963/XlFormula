import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './App.css'

function App() {
  const [count, setState] = useState(false)

  return (
  <>

<Dialog visible={count} onHide={() => setState(false)}>
     contentdf
</Dialog>
  <Button label="Show" onClick={() => setState(true)} />

  </>
  )
}

export default App
