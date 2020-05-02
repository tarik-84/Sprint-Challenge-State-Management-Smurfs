import React, { useEffect, useState } from "react";
import axios from "axios";
import SmurfsList from "./SmurfsList";
import { SmurfsContext } from "../contexts/SmurfsContext";
import SmurfsForm from "../components/SmurfsForm";

function SmurfProvider() {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => setSmurfs(res.data));
  }, [smurfs]);

  return (
    <SmurfsContext.Provider value={{ smurfs }}>
        <SmurfsForm />
        <SmurfsList />
    </SmurfsContext.Provider>
  );
}

export default SmurfProvider;
