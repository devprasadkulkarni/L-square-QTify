import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";

import Section from "../Section";
import Carousel from "../Carousel";

const url = "https://qtify-backend-labs.crio.do/albums/top";

const TopAlbums = () => {
  const [albums, setAlbums] = useState([]);

  const fetchTopAlbums = async () => {
    try {
      const response = await axios.get(url);
      setAlbums(response.data); // API returns an array directly
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTopAlbums();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Section title="Top Albums" />
      <Carousel items={albums} showLikes={false} />
    </Box>
  );
};

export default TopAlbums;
