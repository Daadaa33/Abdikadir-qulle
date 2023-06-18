import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './component/About';
import Projects from './component/Projects';
import Skills from './component/Skills';
import Links from './component/Links';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    errorElement : <h1>Error 404 Not Found</h1>,
    children : [
      {
        path : "/",
        element : <About />,
        index : true
      },
      {
        path :"/about-Me",
         element :<About />
      },
      {
        path :"/Projects",
         element :<Projects />
      },
      {
        path :"/Skills",
         element :<Skills />
      },
      {
        path :"/Links",
         element :<Links />
      },
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='bg-[#DAE1E7] '>
    <RouterProvider router={router}/>
      {/* <App /> */}
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
