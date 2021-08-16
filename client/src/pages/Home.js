import React from "react";
import Courses from "../components/Courses";
import Schedule from "../components/Schedule";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="home">
      <div className="d-flex justify-content-center">
        <h1>Scudler</h1>
      </div>
      <SearchBar />
      <Courses />
      <Schedule className="mt-3" />
    </div>
  );
};

export default Home;
