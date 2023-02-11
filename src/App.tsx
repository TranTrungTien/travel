import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import TemplateProvider from "./context";
import Routers from "./routes";
import { posts } from "./model";

function App() {
  sessionStorage.setItem(
    "admin",
    JSON.stringify({ username: "admin", password: "admin1" })
  );
  // sessionStorage.setItem("posts", JSON.stringify(posts));

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
