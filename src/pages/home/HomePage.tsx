import {
  Container,
  Button,
  Grid,
  Box,
  CircularProgress,
  Pagination,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { characters } from "../../api/characters";
import { HeaderComponent } from "../../components";
import { CardComponent } from "../../components/card/CardComponent";
import { TypeCharacter } from "./interface/character.interface";

function HomePage() {
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(
    null
  );

  const [loading, setLoading] = useState<boolean>(true);

  const [page, setPage] = useState(1);

  const [count, setCount] = useState(1);

  useEffect(() => {
    setLoading(true);
    characters
      .getAll({ page })
      .then((r) => {
        setCount(r.data.info.pages);
        setAllCharacters(r.data.results);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [page]);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <HeaderComponent
        title="Hola Mundo"
        description="Bienvenido"
        element={
          <Button fullWidth variant="contained">
            Estamos en home
          </Button>
        }
      />
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div>
            {allCharacters?.length !== 0 ? (
              <Grid sx={{ my: 2 }} container spacing={2} direction="row">
                {allCharacters!.map((character) => (
                  <Grid item xs={3}>
                    <CardComponent
                      key={character.id}
                      image={character.image}
                      name={character.name}
                      species={character.species}
                      status={character.status}
                      id={character.id}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              "No data"
            )}
          </div>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Pagination
              variant="outlined"
              color="primary"
              count={count}
              page={page}
              onChange={handleChange}
              sx={{ mb: 3 }}
              size="large"
            />
          </Box>
        </>
      )}
    </Container>
  );
}
export default HomePage;
