import React from "react";
import Navbar from "../components/Navbar/Navbar";
import FilesList from "../components/List/FilesList";
import Footer from "../components/Footer/FooterPage";


function HomePage() {
  function whatsMyTheme() {
      document.getElementById("main").classList.toggle("main-bg-dark");
      document.getElementById("main").classList.toggle("main-bg-light");
  };


  return (
    <div id="main" className="main-bg-dark min-h-screen pb-5"> {/* Ensure full height and padding for footer */}
      <Navbar sendThemeData={whatsMyTheme} />
      <FilesList />
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}

export default HomePage;
