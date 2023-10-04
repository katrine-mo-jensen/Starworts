import { useQuery } from "@tanstack/react-query";
import { getCharacter } from "../query/GetCharacters";
import { request } from "graphql-request";
import { Link } from "react-router-dom";
import style from "../pages/characters.module.scss";
import { useEffect, useState } from "react";

export const Characters = () => {
  const [inputText, setInputText] = useState("");
  const [searchData, setSearchData] = useState();

  const { data, isLoading, error } = useQuery({
    queryKey: ["getStarwarsPerson"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        getCharacter
      ),
  });

  function search() {
    let clone = data.allPeople.people.map((i) => i);
    let result = clone.filter((item) =>
      item.name.toLowerCase().includes(inputText.toLowerCase())
    );
    console.log(result);
    setSearchData(result);
  }

  useEffect(() => {
    if (inputText == "") {
      setSearchData();
    }
  }, [inputText]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <div>
        <input
          placeholder="Search"
          onChange={(event) => setInputText(event.target.value)}
        />
        <button onClick={() => search()}>Search</button>
      </div>
      <section className={style.characterOverview}>
        <ul>
          {!searchData
            ? data.allPeople.people.map((item, i) => {
                return (
                  <Link to={`/character/${item.id}`} key={i}>
                    {item.name}
                  </Link>
                );
              })
            : searchData.map((item, i) => {
                return (
                  <Link to={`/character/${item.id}`} key={i}>
                    {item.name}
                  </Link>
                );
              })}
        </ul>
      </section>
    </>
  );
};
