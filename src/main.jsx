import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from '@/App.jsx'
import Home from '@/pages/Home'
import '@/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch,  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faSearch, faLinkedin, faGithub, faTwitter, faInstagram)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
