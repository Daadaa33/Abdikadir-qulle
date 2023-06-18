
import Footer from "./component/Footer";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";


function App() {

  return (
    <>
      <Header />

      <div className=" 	pt-14 ">
        <Outlet />
      </div>
      
      <Footer />
    </>
  );
}

export default App;
