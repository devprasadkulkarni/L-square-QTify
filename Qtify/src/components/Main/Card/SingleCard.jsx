import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";

import styles from "./SingleCard.module.css";

export default function MultiActionAreaCard({ album }) {
  const theme = useTheme();

  if (!album) return null; // safety check

  return (
    <>
      <Card sx={{ minWidth: 250}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            src={album.image}
            alt={album.title}
          />
        </CardActionArea>
        <CardActions>
          <Chip
            label={`${album.follows} Follows`}
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.tertiary.main,
            }}
          />
        </CardActions>
      </Card>
      <p className={styles.text}>{album.title}</p>
    </>
  );
}
