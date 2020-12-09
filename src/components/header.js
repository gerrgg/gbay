import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/PersonOutline";
import CartIcon from "@material-ui/icons/ShoppingCartOutlined";
import Container from "@material-ui/core/Container";
import logo from "../images/safe-logo-darker.png";
import Menu from "./menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
}));

export default function Header() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const MenuButton = ({ className }) => (
    <IconButton
      edge="start"
      className={className}
      color="inherit"
      aria-label="menu"
      onClick={() => setOpen(!open)}
    >
      <MenuIcon />
    </IconButton>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <MenuButton className={classes.menuButton} />
            <Logo className={classes.title} />
            <AccountButton />
            <CartButton />
          </Toolbar>
          <Menu open={open} setOpen={setOpen} />
        </Container>
      </AppBar>
    </div>
  );
}

const Logo = ({ className }) => {
  const style = {
    maxWidth: 100,
  };

  return (
    <Typography variant="h6" className={className}>
      <img src={logo} style={style} />
    </Typography>
  );
};

const AccountButton = () => (
  <IconButton edge="end" color="inherit" aria-label="My Account">
    <PersonIcon />
  </IconButton>
);

const CartButton = () => (
  <IconButton edge="end" color="inherit" aria-label="My Account">
    <CartIcon />
  </IconButton>
);
