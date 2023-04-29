import React, { ChangeEvent } from "react";
import { debounce, TextField } from "@mui/material";

interface Props {
  onSearch: (username: string) => void;
}

const SearchField: React.FC<Props> = (props) => {
  const handleInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
    props.onSearch(e.target.value);
  }, 1000);

  return (
    <TextField
      size="small"
      label="Username"
      variant="outlined"
      onChange={handleInput}
    />
  );
};

export default SearchField;
