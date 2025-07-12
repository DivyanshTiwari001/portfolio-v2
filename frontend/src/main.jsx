import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {About,Achievement,Blog,Contact,Project} from './Pages'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<About/>
      },
      {
        path:'/projects',
        element:<Project/>
      },
      {
        path:'/achievements',
        element:<Achievement/>
      },
      {
        path:'/blogs',
        element:<Blog/>
      },
      {
        path:'/contact-me',
        element:<Contact/>
      },
    ]
  }
],
{basename:'/portfolio-v2/'}
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // </StrictMode>,
)
