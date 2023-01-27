import { FC } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { HorizontalCard } from "../components";
import { useAppSelector } from "../redux/hooks";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

interface CartComponentProps {
  open: boolean;
  handleStateViewDrawer: () => void;
}

export const CartComponent: FC<CartComponentProps> = ({
  open,
  handleStateViewDrawer,
}) => {
  const items = useAppSelector((state) => state.cartReducer);

  return (
    <Drawer anchor={"right"} open={open}>
      <Box sx={{ width: "25em", p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">Cart</Typography>
          <IconButton color="primary" onClick={() => handleStateViewDrawer()}>
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <Divider sx={{ my: 1.5 }} />
        {items.length > 0
          ? items.map(({ id, image, name, info }) => (
              <HorizontalCard
                key={id}
                id={id}
                image={image}
                name={name}
                info={info}
              />
            ))
          : "Nada por aquí"
        }
      </Box>
    </Drawer>
  );
};
