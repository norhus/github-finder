import React from "react";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

interface Props {
  repositories: string[];
  loading: boolean;
}

const RepositoryList: React.FC<Props> = (props) => {
  const { repositories, loading } = props;

  const checkLoaded = () => {
    if (loading) {
      return <CircularProgress />;
    }
    return (
      <List dense={true}>
        {repositories.map((repository: string) => (
          <ListItem key={repository}>
            <ListItemText primary={repository} />
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <div>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Repositories
      </Typography>
      {checkLoaded()}
    </div>
  );
};

export default RepositoryList;
