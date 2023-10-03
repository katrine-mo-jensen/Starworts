import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { Link, useParams } from "react-router-dom";
import { getCharacterDetails } from "../query/getCharacterDetails";

export const CharacterDetails = () => {
  const { id } = useParams();

  console.log("id", id);

  const { data, isLoading, error } = useQuery({
    queryKey: ["StarwarsCharacter"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        getCharacterDetails,
        { personId: id }
      ),
  });

  console.log("Character", data);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <h2>Character details</h2>
      <h3>Name: {data.person.name}</h3>
      <p>Gender: {data.person.gender}</p>
      <p>Height: {data.person.height} cm</p>
      <p>
        Species name:{" "}
        {data.person.species && data.person.species.name
          ? data.person.species.name
          : "unknown"}
      </p>
      <p>
        Species classification:{" "}
        {data.person.species && data.person.species.classification
          ? data.person.species.classification
          : "unknown"}
      </p>
      <p>
        Species language:{" "}
        {data.person.species && data.person.species.language
          ? data.person.species.language
          : "unknown"}
      </p>
      <p>
        Homeworld:{" "}
        {data.person.species && data.person.species.homeworld
          ? data.person.species.homeworld.name
          : "unknown"}
      </p>
      <p>
        Homeworld population:{" "}
        {data.person.species && data.person.species.homeworld
          ? data.person.species.homeworld.population
          : "unknown"}
      </p>

      <button>
        {" "}
        <Link to="/">BACK</Link>{" "}
      </button>
    </div>
  );
};
