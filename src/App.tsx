import React from "react";
import "./App.css";
import RepositoryList from "./components/RepositoryList";
import OrganizationList from "./components/OrganizationList";

function App() {
  return (
    <div className="App">
      <RepositoryList />
      <OrganizationList />
    </div>
  );
}

export default App;
