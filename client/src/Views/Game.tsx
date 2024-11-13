import DiceRoll from "@/components/DiceRoll";

function Game() {
  return (
    <div className="w-full h-full">
      <div>
        <h1 className="text-2xl bold ml-16 mt-4">Game # Ranko</h1>
      </div>
      <div className="flex flex-row justify-center gap-24 h-full mt-4">
        <div className="bg-red-500 w-80 h-[800px]">fico</div>
        <div className=" w-80 h-80"> 
            <div>
                <DiceRoll />
            </div>
        </div>
        <div className="bg-green-500 w-80 h-80"> sicma </div>
      </div>
    </div>
  );
}

export default Game;
