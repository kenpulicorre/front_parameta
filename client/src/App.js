import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import CreateForm from "./components/CreateForm";
import DetailPoke from "./components/DetailPoke"; //detalle de la poke o bolsa principal
import "mdb-react-ui-kit/dist/css/mdb.min.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/home/:id" element={<DetailPoke />} />

          <Route path="/card" element={<CreateForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
