import React, { useState } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const RepositoryList: React.FC = () => {
  const [repositoryNames, setRepositoryNames] = useState([]);
  const handleRepositorySearch = (username: string) => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        let repositories = response.data.map(
          (repository: { name: string }) => repository.name as String
        );
        setRepositoryNames(repositories);
      });
  };

  return (
    <div>
      <button onClick={() => handleRepositorySearch("kiwi")}></button>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Repositories
      </Typography>
      <List dense={true}>
        {repositoryNames.map((repositoryName: string) => (
          <ListItem>
            <ListItemText primary={repositoryName} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RepositoryList;
