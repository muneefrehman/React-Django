import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Room from "./Room";

const RoomWrapper = ({ leaveRoomCallback }) => {
  const { roomCode } = useParams();
  const navigate = useNavigate();

  return (
    <Room
      roomCode={roomCode}
      leaveRoomCallback={leaveRoomCallback}
      navigate={navigate}
    />
  );
};

export default RoomWrapper;
