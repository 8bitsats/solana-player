import { IconButton, Menu, MenuItem } from "@mui/material";
import { CompileTime } from "../compile";
import { VERSION, urlBase } from "../utils";
import GitpodPanel from "./GithubPanel";
import { MyThemeSwitch } from "./MyThemeContext";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { MouseEvent, useState } from "react";
import { MoreHoriz } from "@mui/icons-material";
const MyHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const nameLinks: { [key: string]: string } = {
    Basic: "/",
    App: "/app",
    About: "/about",
  };

  return (
    <div>
      <WalletMultiButton />
      <GitpodPanel />
      <MyThemeSwitch />
      <p style={{ float: "right" }}>
        <span>
          solana player: <b>{VERSION}</b>
        </span>
        <span style={{ marginLeft: "1rem" }}>
          compile at : <b>{CompileTime}</b>
        </span>
      </p>

      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHoriz />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {Object.keys(nameLinks).map((name) => (
          <MenuItem onClick={handleClose} key={name}>
            <a href={`${urlBase}${nameLinks[name]}`}>{name}</a>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MyHeader;
