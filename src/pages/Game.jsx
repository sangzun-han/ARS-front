import styles from "./Game.module.css";
import BackgroundImage from "../assets/images/image-background.png";
import GameBoard from "../components/game/gameboard/GameBoard";
import VoiceChat from "../components/openVidu/VoiceChat";
import Role from "./../components/game/roleDesc/Role";
import Chat from "../components/game/chatting/Chat";
import React from "react";
import { useLocation } from "react-router-dom";
const Game = () => {
  return (
    <div
      className={styles.layout}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${BackgroundImage})`,
      }}
    >
      <GameBoard />
      <Role />
      <Chat />
      {/* <VoiceChat roomId={roomId} /> */}
    </div>
  );
};

export default Game;
