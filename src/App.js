import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./style/style.css";
import MyNav from "./Componets/MyNav";
import MyCard from "./Componets/MyCard";
import AltreCitta from "./Componets/AltreCitta";
import MyBarrier from "./Componets/MyBarr";

function App() {
  return (
    <header className="color">
      <BrowserRouter>
        <MyNav />
        <h2 className="text-center text-light mb-3">Città Più Cercate</h2>
        <MyCard />
        <Routes>
          <Route element={<AltreCitta />} path="altre-citta" />
        </Routes>
        <MyBarrier />
      </BrowserRouter>
    </header>
  );
}

export default App;
