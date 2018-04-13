import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { firebase } from "./firebase";
import Routes from "./routes/routes";

function App(props) {
  return (
    <div>
      <Router>
        <Routes {...props} />
      </Router>
    </div>
  );
}

firebase.auth().onAuthStateChanged(user => {
  ReactDOM.render(<App user={user} />, document.getElementById("root"));
});
