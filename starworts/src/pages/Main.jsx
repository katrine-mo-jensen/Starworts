import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { getFilms } from "../query/getFilms";
import Popup from "reactjs-popup";
import style from "../pages/main.module.scss";

export const Main = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getStarwarsFilm"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        getFilms
      ),
  });


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
          return (
            <Popup
              trigger={<button className="button"> {item.title} </button>}
              modal
              nested
              key={index}
            >
              {(close) => (
                <div className={style.modal}>
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header">
                    <h2>{item.title} </h2>
                  </div>
                  <div className="content">
                    <p>Director: {item.director}</p>
                    <p>Release date: {item.releaseDate}</p>
                  </div>
                </div>
              )}
            </Popup>
          );
        })}
      </ul>
    </>
  );
};
