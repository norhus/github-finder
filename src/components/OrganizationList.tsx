import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

interface Props {
  organizations: string[];
}

const OrganizationList: React.FC<Props> = (props) => {
  const { organizations } = props;

  return (
    <div>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Organizations
      </Typography>
      <List dense={true}>
        {organizations.map((organization: string) => (
          <ListItem key={organization}>
            <ListItemText primary={organization} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default OrganizationList;
