import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";


const myRouter = createBrowserRouter([
  {path: "", element: <Layout />, children: [
    {index: true, element: <Home />},
    {path: "first-react-app", element: <Home />},
    {path: "Home", element: <Home />},
    {path: "About", element: <About />},
    {path: "Portfolio", element: <Portfolio />},
    {path: "Contact", element: <Contact />},
    {path: "*", element: <NotFound />},
  ]}
]);



export default function App() {
  return <>
  
    <RouterProvider router={myRouter} />
  
  </>
}