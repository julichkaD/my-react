import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const WelcomePage = (props) => {
  const imageUrl =
    "https://www.pinclipart.com/picdir/big/88-886440_emoji-feliz-png-emoticon-smile-clipart.png";
  const navigate = useNavigate();
  return (
    <div>
      <h1 id="welcome-page-header">
        Hello and Welcome dear {props.username.toUpperCase()}!!
      </h1>
      <img
        src={imageUrl}
        alt="background"
        width="500"
        height="450"
        id="smile"
      />
      <Button id="welcome-btn" onClick={() => navigate("/another-page")}>
        Click me!
      </Button>
    </div>
  );
};

export default WelcomePage;
