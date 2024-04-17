import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Nav from "../Nav";
const WelcomePage = (props) => {
  const imageUrl =
    "https://th.bing.com/th/id/R.6b4b6b39664429b0b1b74027e410d943?rik=TNOkYLydYSCv2A&riu=http%3a%2f%2fcliparts.co%2fcliparts%2fBTa%2fr6o%2fBTar6oGyc.jpg&ehk=efus2%2bLE1CdS55N6n62FRW53p649TiYjuhU%2fAORlf4U%3d&risl=&pid=ImgRaw&r=0";
  const navigate = useNavigate();
  return (
    <div>
     <Nav/>
      <h1 id="welcome-page-header">
       Hello and Welcome dear {props.username}!!
      </h1>
      <img
        src={imageUrl}
        alt="smile"
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
