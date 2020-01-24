import React from "react";
import Navbar from "./SubReddit/Navbar";
import SubReddit from "./SubReddit/SubReddit";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <SubReddit />
    </div>
  );
}
