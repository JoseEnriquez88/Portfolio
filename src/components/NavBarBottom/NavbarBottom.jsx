"use client";
import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const NavbarBottom = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="home" icon={<HomeIcon />} />
      <BottomNavigationAction label="projects" icon={<WorkIcon />} />
      <BottomNavigationAction label="about" icon={<PersonIcon />} />
      <BottomNavigationAction label="contact" icon={<ContactPageIcon />} />
    </BottomNavigation>
  );
};

export default NavbarBottom;
