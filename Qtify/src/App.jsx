import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopAlbums from "./components/Main/TopAlbums/TopAlbums";
import Card from "./components/Main/Card/SingleCard";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopAlbums />
    </>
  );
}

export default App;
