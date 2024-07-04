import React from "react";
import "./App.css";
import Layout from "./Components/Layouts/Layout";
import BodyContents from "./Components/Layouts/Body";

function App() {
  return (
    <div className="portfolio">
      <Layout>
        <BodyContents />
      </Layout>
    </div>
  );
}

export default App;
