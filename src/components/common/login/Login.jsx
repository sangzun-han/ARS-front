import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../../store/login";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const loginState = useSelector((state) => {
    return state.login;
  });

  useEffect(() => {
    dispatch(getUserInfo(code));
    if (loginState.userStatus === "empty") {
      navigate("/");
    }
  }, [loginState.userStatus]);

  return (
    <>
      <div>
        <CircularProgress />
      </div>
    </>
  );
};

export default Login;
