import React from "react";
import { grey400 } from "material-ui/styles/colors";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";

export const iconButtonElement = (
  <IconButton touch={true} tooltipPosition="bottom-left">
    <MoreVertIcon color={grey400} />
  </IconButton>
);

export const cardMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Pin</MenuItem>
    <MenuItem>Hide</MenuItem>
  </IconMenu>
);
