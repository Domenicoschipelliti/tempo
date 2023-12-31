import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./style/style.css";
import MyNav from "./Componets/MyNav";
import MyCard from "./Componets/MyCard";
import AltreCitta from "./Componets/AltreCitta";
import MyBarrier from "./Componets/MyBarr";

import Roma from "./Componets/Roma";
import Messina from "./Componets/Messina";
import Berlino from "./Componets/Berlino";

function App() {
  return (
    <header className="color">
      <BrowserRouter>
        <MyNav />
        <h1 className="text-center text-light mb-3">Città Più Cercate</h1>
        <MyCard />
        <Routes>
          <Route element={<AltreCitta />} path="altre-citta" />
        </Routes>
        <Routes>
          <Route element={<Roma />} path="roma" />
        </Routes>
        <Routes>
          <Route element={<Messina />} path="messina" />
        </Routes>
        <Routes>
          <Route element={<Berlino />} path="berlino" />
        </Routes>
        <MyBarrier />
      </BrowserRouter>
    </header>
  );
}

export default App;
