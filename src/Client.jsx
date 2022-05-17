import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Client() {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        axios.get('url')
        .then(response => setClients(response.data.data))
    }, [])
    
  return (
    <React.Fragment>
        <div>
            <h1>Client</h1>
            {/* Here is where you put the table and dynamically map through the data into the table. */}
        </div>
    </React.Fragment>
  )
}

export default Client;