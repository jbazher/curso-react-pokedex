import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { CardTitle } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";

import { getPokemons } from "../controller/getpokemon";
import { Pokemon } from "../models/pokemon.m";

const Listado = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const obtenerTodos = async () => {
      const allPokemons = await getPokemons();
      setPokemons(allPokemons);
    };
    obtenerTodos();
  });

  const filtrarpokemon = pokemons?.slice(0, 151).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(query.toLowerCase());
  });

  return (
    <>
      <h1>Pokemon List</h1>
      <header>
        <input
          value={query}
          placeholder="Buscar Pokemon"
          onChange={(event) => setQuery(event.target.value.trim())}
          type="text"
        />
      </header>

      <div className="content-wrapper">
        <div className="content">
          <div className="row gap-3">
            {filtrarpokemon?.slice(0, 150).map((pokemon) => (
              <Card className="mx-auto" style={{ width: "18rem" }}>
                <Card.Header>
                  <b>Tipo: {pokemon.type}</b>
                </Card.Header>
                <Card.Img
                  width="80"
                  height="100"
                  variant="top"
                  className="d-block mx-auto w-50"
                  src={pokemon.imggif}
                />
                <Card.Body>
                  <CardTitle className="text-center">
                    {pokemon.id} - {pokemon.name}
                  </CardTitle>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        src="https://cdn-icons-png.flaticon.com/128/8236/8236748.png"
                      />
                      <b> HP : </b>
                      {pokemon.hp}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={17}
                        height={17}
                        src="https://cdn-icons-png.flaticon.com/128/13929/13929630.png"
                      />
                      <b> Ataque: </b> {pokemon.attack}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        src="https://cdn-icons-png.flaticon.com/128/8294/8294515.png"
                      />
                      <b> Defensa: </b> {pokemon.defense}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        src="https://cdn-icons-png.flaticon.com/128/11880/11880172.png"
                      />
                      <b> Ataque E.: </b> {pokemon.sp_atk}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        src="https://cdn-icons-png.flaticon.com/128/8037/8037114.png"
                      />
                      <b> Defensa E.: </b> {pokemon.sp_def}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        src="https://cdn-icons-png.flaticon.com/128/9233/9233133.png"
                      />
                      <b> Velocidad: </b> {pokemon.speed}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Listado;

