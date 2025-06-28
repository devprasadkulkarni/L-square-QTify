import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";

import Section from "../Section";
import Carousel from "../Carousel";

const url = "https://qtify-backend-labs.crio.do/albums/new";

const NewAlbums = () => {
  const [albums, setAlbums] = useState([]);

  const fetchNewAlbums = async () => {
    try {
      const response = await axios.get(url);
      setAlbums(response.data); // API returns an array directly
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNewAlbums();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Section title="New Albums" />
      <Carousel items={albums} showLikes={false} />
    </Box>
  );
};

export default NewAlbums;
