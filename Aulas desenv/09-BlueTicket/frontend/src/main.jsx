import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import Evento from './pages/Evento.jsx'

const paginas = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/listadetalhes/:id", element: <Evento />}
  
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={paginas}/>

)
