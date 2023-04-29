import React, { useState } from "react";
import SearchField from "./SearchField";
import RepositoryList from "./RepositoryList";
import OrganizationList from "./OrganizationList";
import axios from "axios";

const Finder: React.FC = () => {
  const [repositories, setRepositories] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username: string) => {
    try {
      setLoading(true);
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
    setLoading(false);
  };

  return (
    <div>
      <SearchField onSearch={handleSearch} />
      <RepositoryList repositories={repositories} loading={loading} />
      <OrganizationList organizations={organizations} loading={loading} />
    </div>
  );
};

export default Finder;
