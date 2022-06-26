import React from "react";
import Card from "./components/Card";
import FAQ from "./components/FAQ";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Tech from "./components/Tech";

function App() {
  return (
    <>
      <Hero />
      <Featured />
      <Tech />
      <Card />
      <FAQ />
    </>
  );
}

export default App;
