import React from "react";
import "./App.css";
import NavBar from "./components/Navigation Bar/NavBar";
import PageLayout from "./components/Page Layout/PageLayout";
import ContentPage from "./components/Content Page/ContentPage";
import NameCard from "./components/Name card/NameCard";
import { AiFillAlert } from "react-icons/ai";
import TextCard from "./components/Text Card/TextCard";
import RouteControl from "./routeControl/RouteControl";
import DarkMode from "./components/Night Mode/DarkMode";

function App() {
  return (
    <div>
      <DarkMode>

      <NavBar />
      <RouteControl/>

      </DarkMode>
    
    </div>
  );
}

export default App;
