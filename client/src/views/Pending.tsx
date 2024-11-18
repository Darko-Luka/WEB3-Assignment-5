import { Button } from "@/components/ui/button";
import * as api from "../model/api";
import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

const Pending = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const gameId = parseInt(id ?? "0", 10);

  const selectPendingGames = (state: RootState) => state.pendingGames.gameList;
  const selectOngoingGames = (state: RootState) => state.ongoingGames.gameList;
  const selectPlayer = (state: RootState) => state.player.player;

  const pendingGames = useSelector(selectPendingGames);
  const ongoingGames = useSelector(selectOngoingGames);
  const player = useSelector(selectPlayer);

  const selectedPendingGame = pendingGames.find((g) => g.id === gameId);
  const selectedOngoingGame = ongoingGames.find((g) => g.id === gameId);

  const canJoin = useCallback(() => {
    return (
      selectedPendingGame &&
      player &&
      !selectedPendingGame.players.includes(player)
    );
  }, [player, selectedPendingGame]);

  const join = useCallback(() => {
    if (selectedPendingGame && player && canJoin()) {
      api.join(selectedPendingGame, player);
    }
  }, [selectedPendingGame, player, canJoin]);

  useEffect(() => {
    console.log(selectedOngoingGame);
    console.log(selectedPendingGame);
    console.log("Fico");
    if (!selectedPendingGame) {
      console.log("+");
      if (selectedOngoingGame) {
        console.log("Kata");
        navigate(`/game/${gameId}`);
      } else {
        navigate("/");
      }
    }
  }, [selectedPendingGame, selectedOngoingGame, gameId, navigate]);

  useEffect(() => {
    if (!player) {
      navigate(`/login?pending=${id}`);
    } else if (!selectedPendingGame) {
      if (selectedOngoingGame) {
        navigate(`/game/${id}`, { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    }
  }, []);

  return (
    <div className="space-y-2">
      <h1>Game #{id}</h1>
      <p>
        Created by: <span>{selectedPendingGame?.creator}</span>
      </p>
      <p>
        Players: <span>{selectedPendingGame?.players.join(", ")}</span>
      </p>
      <p>
        Available Seats:{" "}
        <span>
          {(selectedPendingGame?.number_of_players ?? 2) -
            (selectedPendingGame?.players.length ?? 0)}
        </span>
      </p>
      {canJoin() && <Button onClick={join}>Power joint</Button>}
    </div>
  );
};

export default Pending;
