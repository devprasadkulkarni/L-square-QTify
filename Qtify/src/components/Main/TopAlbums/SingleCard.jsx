import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";

import styles from "./SingleCard.module.css";

export default function SingleCard({ album, showLikes = false }) {
  const theme = useTheme();

  if (!album) return null;

  const chipLabel = showLikes
    ? `${album.likes || 0} Likes`
    : `${album.follows || 0} Follows`;

  return (
    <>
      <Card sx={{ minWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={album.image}
            alt={album.title}
          />
        </CardActionArea>
        <CardActions>
          <Chip
            label={chipLabel}
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
