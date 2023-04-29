import React from "react";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

interface Props {
  organizations: string[];
  loading: boolean;
}

const OrganizationList: React.FC<Props> = (props) => {
  const { organizations, loading } = props;

  const checkLoaded = () => {
    if (loading) {
      return <CircularProgress />;
    }
    return (
      <List dense={true} sx={{ overflow: "auto", height: "75vh" }}>
        {organizations.map((organization: string) => (
          <ListItem key={organization}>
            <ListItemText primary={organization} />
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <div>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Organizations
      </Typography>
      {checkLoaded()}
    </div>
  );
};

export default OrganizationList;
