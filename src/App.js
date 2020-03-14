import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";

import "./App.scss";

function App() {
  const [count, setCount] = useState(0);
  const [breeds, setBreeds] = useState(null);
  const [urlImage, setImage] = useState("");

  const fetchBreeds = async () => {
    const res = await axios.get("https://dog.ceo/api/breeds/list/all");
    const entries = Object.entries(res.data.message);

    // Looping over entires to get all possible breeds
    const breeds = [];
    entries.map(breed => {
      if (breed[1].length === 0) {
        breeds.push(breed[0]);
      } else {
        breed[1].map(nestedBreed => {
          breeds.push(`${nestedBreed} ${breed[0]}`);
        });
      }
    });

    setBreeds(breeds);
  };

  const fetchImage = async breedType => {
    let url = "";
    const hasWhiteSpace = breedType.indexOf(" ") >= 0;

    if (!hasWhiteSpace)
      url = `https://dog.ceo/api/breed/${breedType}/images/random`;
    else {
      const firstWord = breedType.substr(0, breedType.indexOf(" "));
      const secondWord = breedType.substr(breedType.indexOf(" ") + 1);
      console.log(firstWord);
      console.log(secondWord);
      url = `https://dog.ceo/api/breed/${secondWord}/${firstWord}/images/random`;
    }
    const res2 = await axios.get(url);
    setImage(res2.data.message);
  };

  useEffect(() => {
    fetchBreeds();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <MainContainer
        breeds={breeds}
        urlImage={urlImage}
        fetchImage={fetchImage}
      />
      <Footer />
    </React.Fragment>
  );
}

export default App;
