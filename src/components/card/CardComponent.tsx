import { SettingsOverscan } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/slices";
import { setItem } from "../../utils/localStorage";

type CardProps = {
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
};

export const CardComponent: FC<CardProps> = ({
  id,
  image,
  name,
  species,
  status,
}) => {
  let navigate = useNavigate();
  const [disabledBtn, setDisabledBtn] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const itemExist = useAppSelector((state) => state.cartReducer);

  useEffect(() => {
    setDisabledBtn(itemExist.some((item) => item.id === id));
    setItem("cart", itemExist);
  }, [itemExist, id]);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        name,
        image,
        info: status,
      })
    );
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {name}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }}>Especie: {species}</Typography>
        <Typography sx={{ mt: 1.5 }}>Estado: {status}</Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          size="small"
          onClick={() => navigate(`/character/${id}`)}
        >
          Learn More
        </Button>
        <Button
          fullWidth
          variant="outlined"
          size="small"
          disabled={disabledBtn}
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
