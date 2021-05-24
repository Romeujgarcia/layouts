import React from "react";
import "../App.css";
import "./Cabecalho.css"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Input } from "@material-ui/core";


function Cabecalho(){
      return (
          <div className="cabecalho">
            <div className="name"><SearchRoundedIcon/> < Input /> </div>
            <div></div>
            <div className="icon"> <NotificationsRoundedIcon/> <AccountCircleIcon/></div>
            
            
          </div>

      )



}


export default Cabecalho;