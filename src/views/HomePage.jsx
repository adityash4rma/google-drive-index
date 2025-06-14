import React from "react";
import Navbar from "../components/Navbar/Navbar";
import FilesList from "../components/List/FilesList";

function HomePage() {
  return (
    <div>
      <Navbar />
      <FilesList/>
    </div>
  );
}

export default HomePage;
