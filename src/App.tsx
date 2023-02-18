import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import TemplateProvider from "./context";
import Routers from "./routes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("run");
    localStorage.setItem(
      "admin",
      JSON.stringify({ username: "admin", password: "admin" })
    );
  }, []);
  return (
    <div className="w-full">
      <BrowserRouter>
        <TemplateProvider>
          <Header />
          <Routers />
          <Footer />
        </TemplateProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
