import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.tertiary.main,
  "&:hover": {
    backgroundColor: theme.palette.tertiary.main,
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "400px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  right: 0,
  top: 0,
  height: "100%",
  padding: theme.spacing(0, 2),
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.secondary.main,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.secondary.main,
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.spacing(2), // left padding for user input
    paddingRight: `calc(1em + ${theme.spacing(4)})`, // space for icon on right
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export default function SearchBar() {
  return (
    <Search>
      <StyledInputBase
        placeholder="Search a album of your choice"
        inputProps={{ "aria-label": "search" }}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </Search>
  );
}
