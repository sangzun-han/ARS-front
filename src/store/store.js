import { configureStore } from "@reduxjs/toolkit";
import { roomSlice } from "./room";
import { modalSlice } from "./modal";
import { roomAndStandBySlice } from "./roomAndStandBy";
import { roundLogSlice } from "./roundLog";
import { roomAndActiveSlice } from "./roomAndActive";
import { loginSlice } from "./login";

export default configureStore({
  reducer: {
    room: roomSlice.reducer,
    roomAndStandBy: roomAndStandBySlice.reducer,
    roomAndActive: roomAndActiveSlice.reducer,
    modal: modalSlice.reducer,
    roundLog: roundLogSlice.reducer,
    login: loginSlice.reducer,
  },
});
