import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { KeyBoard } from './pages/Keyboard';
import { Layout } from './layout/layout';
import { Functions } from './pages/Functions';
import DetailedPage from './pages/DetailedPage';

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
        path: 'keyboardshortcuts',
        element: <KeyBoard />,
      },
      {
        path: 'functions',

        children: [
          {
            index: true,
            element: <Functions />,
          },
          // {
          //   path: ':type',
          //   element: <DetailedPage />
          // }
        ]
      },
      {
        path: "*",
        element: <Navigate to="/" />
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
