import { Button } from "./ui/button";
import one from "../assets/1.png";

function DiceRoll() {
  return (
    <div>
      <h1 className="text-xl">Kata is playing ...</h1>
      <div className="flex flex-row gap-5 size-10 mt-4">
        <img src={one}></img>
        <img src={one}></img>
        <img src={one}></img>
        <img src={one}></img>
        <img src={one}></img>
      </div>
    
      <div className="flex flex-row gap-12 ml-3 size-6 mt-4">
        <input type="checkbox"  />
        <input type="checkbox"  />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox"  />
      </div>
      <Button className="mt-4 ml-28">Re-roll</Button>
    </div>
  );
}

export default DiceRoll;
