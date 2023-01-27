import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CartComponent } from "./CartComponent";
import { useAppSelector } from "../redux/hooks";
import { useState } from "react";

function NavBar() {
  const navigate = useNavigate();
  const items = useAppSelector((state) => state.cartReducer);
  const [open, setOpen] = useState<boolean>(false);

  const handleStateViewDrawer = () => {
    setOpen((state) => !state);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container //!EL Grid padre siempre es Container!//
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>Lucho</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <IconButton
                    color="primary"
                    onClick={() => handleStateViewDrawer()}
                  >
                    <Badge color="error" badgeContent={items.length}>
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </IconButton>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                  <Button variant="outlined">Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <CartComponent
        open={open}
        handleStateViewDrawer={handleStateViewDrawer}
      />
    </Box>
  );
}
export default NavBar;
