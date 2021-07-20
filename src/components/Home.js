import React, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  function checkLoginStatus() {
    axios
      .get("https://tracking-app-be-zil.herokuapp.com/api/v1/measurements")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => error);
  }
  useEffect(() => {
    checkLoginStatus();
  });

  return <div></div>;
};

export default Home;
