import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const Browse = () => {
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
  };
  useEffect(() => {
    getNowPlaying();
  }, []);

  return (
    <div>
      <h1>Browse Page</h1>
    </div>
  );
};

export default Browse;
