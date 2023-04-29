import React, { useState } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const OrganizationList: React.FC = () => {
  const [organizationNames, setOrganizationNames] = useState([]);

  const handleOrganizationSearch = (username: string) => {
    axios
      .get(`https://api.github.com/users/${username}/orgs`)
      .then((response) => {
        let organizations = response.data.map(
          (organization: { login: string }) => organization.login
        );
        setOrganizationNames(organizations);
      });
  };

  return (
    <div>
      <button onClick={() => handleOrganizationSearch("kiwi")}></button>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Organizations
      </Typography>
      <List dense={true}>
        {organizationNames.map((organizationName: string) => (
          <ListItem>
            <ListItemText primary={organizationName} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default OrganizationList;
