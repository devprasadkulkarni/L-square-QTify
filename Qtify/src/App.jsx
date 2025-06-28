import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopAlbums from "./components/Main/TopAlbums/TopAlbums";
import Card from "./components/Main/TopAlbums/SingleCard";
import NewAlbums from "./components/Main/NewAlbums/NewAlbums";
import Songs from "./components/Main/Songs/Songs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopAlbums />
      <NewAlbums />
      <Songs />
    </>
  );
}

export default App;
