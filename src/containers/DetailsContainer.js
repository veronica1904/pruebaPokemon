import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPokemon from "../components/Card";
import { requestPokemon } from "../redux/actions/pokemon";
import { pokemonList } from "../redux/selectors/pokemon";
import { ContentGrid } from "./styled";

function DetailsContainer() {
  const dispatch = useDispatch();
  const dataPokemon = useSelector(pokemonList);
  useEffect(() => {
    dispatch(requestPokemon());
  }, []);

  return (
    <ContentGrid>
      {!dataPokemon.loading &&
        dataPokemon.pokemonList.map((item, index) => (
          <CardPokemon
            key={index}
            name={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
    </ContentGrid>
  );
}

export default DetailsContainer;
