import { postConfig_8000 } from "./config";
import axios from "axios";

export const ready = (roomId, nickname) => {
  const body = {
    roomId: roomId,
    nickname: nickname,
  };

  const res = axios(postConfig_8000("/standby-service/room/ready"), body);
  console.log(res);
  return res.data;
};

export const start = (roomId, nickname) => {
  const body = {
    roomId: roomId,
    nickname: nickname,
  };

  const res = axios(postConfig_8000("/api/game/start", body));
  console.log(res);
  return res.data;
};

export const exit = (roomId, nickname) => {
  const body = {
    roomId: roomId,
    nickname: nickname,
  };

  const res = axios(postConfig_8000("/standby-service/room/kick"), body);
  console.log(res);
  return res.data;
};
