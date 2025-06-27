import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import SearchBar from "./Search/SearchBar";
import Logo from "./Logo/Logo";
import Button from "./Button/Button";

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left side: Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Logo />
          </Box>

          {/* Center: Search box */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <SearchBar />
          </Box>

          {/* Right side: Button */}
          <Button />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
