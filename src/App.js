import Footer from "./component/Footer";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import { useAuth } from "./context/Context";
import { useEffect } from "react";

function App() {
  const { theme, setTheme } = useAuth();

  localStorage.setItem("theme", JSON.stringify(theme));

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Header />
      <div className="pt-14 bg-[#DAE1E7] dark:bg-[#082032]">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default App;
