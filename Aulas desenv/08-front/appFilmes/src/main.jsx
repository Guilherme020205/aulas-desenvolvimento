import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Filme from './pages/Filme'

const paginas = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/filme/:id', element: <Filme /> },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={paginas} />,
)
