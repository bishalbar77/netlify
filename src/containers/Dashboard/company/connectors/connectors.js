import React, { useState, useEffect } from 'react';
import ConnectorsList from '../../ConnectorsList/ConnectorsList';
import "./Connector.css";
import API from '../../../../Api/API';

const Connectors = () => {
  const [connectors, setConnectors] = useState([]);
  
  // Retrive from api
  const retrieveConnectors = async () => {
    const response = await API.get("/getAllConnectors");
    return response.data;
  }
  useEffect(() => {
    const getAllConnectors = async () => {
      const allConnectors = await retrieveConnectors();
      if(allConnectors) { 
        setConnectors(allConnectors);
      }
    };
    getAllConnectors();
  }, []);


  return (
    <div className="connector-container">
      <ConnectorsList
       connectors={connectors} />
    </div>
  );
}

export default Connectors;