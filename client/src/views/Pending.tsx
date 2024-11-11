import { Button } from "@/components/ui/button";

const Pending = () => {
  return (
    <div className="space-y-2">
      <h1>Game #Prso ima bokser</h1>
      <p>
        Created by: <span>Darinka</span>
      </p>
      <p>
        Players: <span>Boske, prso i dara</span>
      </p>
      <p>
        Available Seats: <span>0</span>
      </p>
      <Button>Power joint</Button>
    </div>
  );
};

export default Pending;
