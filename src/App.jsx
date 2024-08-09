import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { KeyBoard } from './pages/Keyboard';
import { Layout } from './layout/layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/keyboardshortcuts',
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
