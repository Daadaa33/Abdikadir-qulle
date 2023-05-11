
import About from "./component/About";
import Header from "./component/Header";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Links from "./component/Links";
import Footer from "./component/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import dada from "../src/img/dada.jpg"
function App() {

  return (
    <>
      <Router>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Header />
        <div className=" 	pt-14 ">
          <Routes>
            <Route path="/About Me" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Links" element={<Links />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
