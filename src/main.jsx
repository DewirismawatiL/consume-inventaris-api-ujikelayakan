import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './router'
import { RouterProvider } from "react-router-dom"; // ;-> tidak wajib ada

// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

ReactDOM.createRoot(document.getElementById('root')).render
(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

library.add(fab, fas, far)
