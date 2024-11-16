import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [player, setPlayer] = useState<string>("");
  const navigate = useNavigate();

  const enabled = player !== "";

  const login = () => {
    navigate("/lobby");
  };

  const loginKeyListener = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && enabled) {
      e.preventDefault();
      login();
    }
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col ">
        <p className="mt-2">Login</p>
        <p className="mt-2">
          Username:
          <Input
            className="h-8 flex w-36 mt-2"
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
            onKeyDown={loginKeyListener}
          />
          <Button className="mt-2 w-16 h-10 mb-2 ml-10" disabled={!enabled} onClick={login}>
            Login
          </Button>
        </p>
      </div>
    </>
  );
}
