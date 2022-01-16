import { useState } from "react";

export const useInput = (params) => {
  const [inputs, setInputs] = useState({});

  const onInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return [inputs, onInputChange];
};