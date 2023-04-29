import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

interface Props {
  repositories: string[];
}

const RepositoryList: React.FC<Props> = (props) => {
  const { repositories } = props;

  return (
    <div>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Repositories
      </Typography>
      <List dense={true}>
        {repositories.map((repository: string) => (
          <ListItem key={repository}>
            <ListItemText primary={repository} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RepositoryList;
