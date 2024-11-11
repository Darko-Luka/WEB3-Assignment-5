import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Lobby = () => {
  const player = "et";

  const [numberOfPlayers, setNumberOfpLayers] = useState(2);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let int = 2;
    try {
      int = +event.target.value;
    } catch {
      /* empty */
    }

    setNumberOfpLayers(int);
  };

  const new_game = (player: string) => {};

  return (
    <div className="max-w-screen-md p-4 space-y-6">
      <h1 className="text-3xl">Yahtzee!</h1>
      <main className="space-x-4 flex items-center">
        {player && (
          <>
            <span className="min-w-fit">Number of players: </span>{" "}
            <Input
              min="1"
              type="number"
              value={numberOfPlayers}
              onChange={handleChange}
            />
            <Button onClick={() => new_game(player)}>New Game</Button>
          </>
        )}
      </main>
    </div>
  );
};

export default Lobby;
