import { Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Game from "./views/Game";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto bg-slate-800 h-screen">
      <div className="bg-white">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
