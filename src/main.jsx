import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Root from './routes/root.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import './index.css'
import ErrorPage from './error-page.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
