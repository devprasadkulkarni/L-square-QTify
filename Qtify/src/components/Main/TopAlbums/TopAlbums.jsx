import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";

import AlbumCard from "../Card/SingleCard"; // renamed to avoid MUI clash

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
      <Grid container spacing={2}>
        {albums.map((album) => {
          return (
            <Grid key={album.id}>
              <AlbumCard album={album} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default TopAlbums;
