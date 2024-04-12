import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home.jsx'
import AppliedJobs from './components/AppliedJobs.jsx'
import Blog from './components/Blog.jsx'
import Statistics from './components/Statistics.jsx'
import EoorPage from './components/EoorPage.jsx'
import JobDetails from './components/JobDetails.jsx'
import { ToastContainer} from 'react-toastify';


const router = createBrowserRouter([
  {
    path : '/',
    element : <Root></Root>,
    errorElement : <EoorPage></EoorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/applied',
        element : <AppliedJobs></AppliedJobs>,
        loader : ()=> fetch('/jobs.json')
      },
      {
        path : '/blogs',
        element : <Blog></Blog>
      },
      {
        path : '/statistics',
        element : <Statistics></Statistics>
      },
      {
        path : '/job/:id',
        element : <JobDetails></JobDetails>,
        loader : () => fetch('/jobs.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer></ToastContainer>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
