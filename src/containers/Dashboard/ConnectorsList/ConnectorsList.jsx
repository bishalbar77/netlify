import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import ConnectorCard from '../ConnectorCard/ConnectorCard';
import "./ConnectorsList.css";

const ConnectorsList = ({connectors}) => {
    const inputEL = useRef("");
    // const deleteContactHandler = (id) => {
    //     props.getContactId(id);
    // };
    
    console.log(connectors.data);
    const renderConnectorList = typeof(connectors.data) !== 'undefined' && connectors.data != null ? connectors.data.map((connector) => {
        return <ConnectorCard id={connector.id} name={connector.name} logo={connector.logo} connector={connector} key={connector.id}/>;
    }) : null;
    return (
        <div className="row">
            {typeof(renderConnectorList) !== 'undefined' && renderConnectorList != null ? renderConnectorList : "No contacts available"}
        </div>
    )};
export default ConnectorsList;