"use client"
import variables from "../app/variables.module.scss"
import HomeIcon from "@mui/icons-material/Home"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import FavoriteIcon from "@mui/icons-material/Favorite"
import Paper from '@mui/material/Paper'
import * as React from "react"

const BottomNav = () => {
    var [value, setValue] = React.useState('/');
    return (
        <Paper  elevation={3}>
        <BottomNavigation className={variables.bottom}
        showLabels
        value={value}
        onChange={(event, newValue) => {
        setValue(newValue); }}>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} href="/" style={{color:"white"}}/>
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} href="/favourite" style={{color:"white"}}/>
        </BottomNavigation>
        </Paper>
      );
};
export default BottomNav;
