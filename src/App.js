
import About from "./component/About";
import Header from "./component/Header";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Links from "./component/Links";
import Footer from "./component/Footer";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"


function App() {

  return (
    <>
       
      <BrowserRouter>
        <Header />
        <div className=" 	pt-14 ">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Links" element={<Links />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
