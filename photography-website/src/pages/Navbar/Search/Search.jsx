import React, { useContext, useEffect, useState } from "react";
import "../../RightContent/RightContent.scss";
import Context from "../../../context/Context";

const Search = ({prop}) => {

  const [query, setQuery] = useState("dog");
  const [data, setData] = useState([]);

  setQuery(prop);
  const getPhotos = async () => {
    await fetch(
      `https://api.pexels.com/v1/search?query=${query}?page=2&per_page=500`,
      {
        headers: {
          Authorization:
            "2QA3WQWUye1HYqg9bIe0X2VpGeiXhAyG4jM5ceqkO6O7NJum1t8mbLNc",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.photos);
      });
  };
  getPhotos();
  console.log(prop)
  
  return (
    <div className="rightContent">
      <div className="container">
        {data.map((item, index) => (
          <div className="post" key={index}>
            <img src={item.src.medium} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
