import React from "react";
import { render, hydrate } from "react-dom";
import App from "./app";

const element = document.getElementById("root");

if (element.hasChildNodes()) {
  hydrate(<App />, element);
} else {
  render(<App />, element);
}
