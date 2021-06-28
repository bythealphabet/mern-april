import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./MainRouter";

function App(props) {
	return <Router><MainRouter /></Router>;
}

export default hot(App);
