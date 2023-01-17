import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

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
      </CardActions>
    </Card>
  );
};
