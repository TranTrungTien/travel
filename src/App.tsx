import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Routers from "./routes";

function App() {
  localStorage.setItem(
    "admin",
    JSON.stringify({ username: "admin", password: "admin1" })
  );
  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routers />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
