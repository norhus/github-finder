import React, { useState } from "react";
import SearchField from "./SearchField";
import RepositoryList from "./RepositoryList";
import OrganizationList from "./OrganizationList";
import axios from "axios";

const Finder: React.FC = () => {
  const [repositories, setRepositories] = useState([]);
  const [organizations, setOrganizations] = useState([]);

  const handleSearch = async (username: string) => {
    try {
      await axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
          let repos = response.data.map(
            (repository: { name: string }) => repository.name
          );
          setRepositories(repos);
        });

      await axios
        .get(`https://api.github.com/users/${username}/orgs`)
        .then((response) => {
          let orgs = response.data.map(
            (organization: { login: string }) => organization.login
          );
          setOrganizations(orgs);
        });
    } catch (err) {
      setRepositories([]);
      setOrganizations([]);
      console.log(err);
    }
  };

  return (
    <div>
      <SearchField onSearch={handleSearch} />
      <RepositoryList repositories={repositories} />
      <OrganizationList organizations={organizations} />
    </div>
  );
};

export default Finder;
