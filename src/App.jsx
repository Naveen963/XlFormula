import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { KeyBoard } from './pages/Keyboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/keyboard',
        element: <KeyBoard />
      }
    ]
  }
])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
