import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { getFilms } from "../query/getFilms";

export const Main = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getStarwarsFilm"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        getFilms
      ),
  });

  console.log("Data", data);

  if (isLoading) {
    return <p>Loading... </p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <h1>Starworts Films</h1>
      <ul>
        {data.allFilms.films.map((item, index) => {
          return <p key={index}>{item.title}</p>;
        })}
      </ul>
    </>
  );
};
