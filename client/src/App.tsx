import { Link } from "react-router-dom";
import Pending from "./views/Pending";

function App() {
  return (
    <div className="w-full bg-slate-800 h-screen">
      <div className="bg-white max-w-screen-lg mx-auto flex justify-between p-4">
        <div className="space-y-6">
          <h1 className="text-3xl">Yahtzee!</h1>
          <h2 className="text-2xl">Welcome player: Boske (upper left x3)</h2>
          <Pending />
        </div>
        <nav className="space-y-4">
          <Link className="text-blue-500 underline" to="/">
            Lobby
          </Link>

          <h2 className="text-2xl">My Games</h2>
          <h3 className="text-xl">Ongoing</h3>

          <Link className="text-blue-500 underline" to="#">
            Game #ja? ja? ja?
          </Link>

          <h3 className=" text-xl">Waiting for players</h3>
          <Link className="text-blue-500 underline" to="#">
            {" "}
            Game #David Mandaric (prso)
          </Link>

          <h2 className="text-xl">Available Games</h2>
          <Link className="text-blue-500 underline" to="#">
            Game #Tać! Tać! Tać!
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default App;
