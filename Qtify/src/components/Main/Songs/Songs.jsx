import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import axios from "axios";

import Section from "../Section";
import Carousel from "../Carousel";

const Songs = ({ title = "Songs" }) => {
  const [value, setValue] = useState("all");
  const [allSongs, setAllSongs] = useState([]);
  const [genres, setGeneres] = useState([]);

  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchAllSongs = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/songs"
      );
      setAllSongs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchGenres = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/genres"
      );
      setGeneres(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllSongs();
    fetchGenres();
  }, []);

  return (
    <div>
      <Section title={title} />
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab
            value="all"
            label="All Songs"
            sx={{ color: theme.palette.tertiary.main }}
          />
          <Tab
            value="rock"
            label="Rock"
            sx={{ color: theme.palette.tertiary.main }}
          />
          <Tab
            value="pop"
            label="Pop"
            sx={{ color: theme.palette.tertiary.main }}
          />
          <Tab
            value="jazz"
            label="Jazz"
            sx={{ color: theme.palette.tertiary.main }}
          />
          <Tab
            value="blues"
            label="Blues"
            sx={{ color: theme.palette.tertiary.main }}
          />
        </Tabs>
        <Box sx={{ mt: 2 }}>
          {value === "all" && <Carousel items={allSongs} showLikes={true} />}
        </Box>
      </Box>
    </div>
  );
};

export default Songs;
