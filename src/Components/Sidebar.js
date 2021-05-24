import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
import  header_sidebar from "../images/header_sidebar.jpeg";
import  footer_sidebar from "../images/footer_sidebar.jpeg";
import "./Sidebar.css";



function Sidebar() {
  return (  
    <div className="Sidebar">
      <i><img className="header" src={header_sidebar}/></i>
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <div
              key={key}
              className="row"
              id={window.location.pathname == val.link ? "active" : "" }
              onClick={() => {
                Window.location.pathname = val.link;
              }}
            >
        
              <di id="icon">{val.icon}</di> <div id= "title">{val.title}</div>
            </div>
          );
        })}
      </ul>
     <s><img className="footer" src={footer_sidebar}/></s>
     </div>  



    

    


             
  
      
    

  );
}

export default Sidebar;
