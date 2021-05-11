import React, {createContext, useState} from 'react';

const JsonContext = createContext(null)

const JsonProvider = ({children}) => {
const [token, setToken] = useState('');
const[cliente, setCliente] = useState({});


return (
    <JsonContext.Provider
        value = {{
            token, setToken, cliente, setCliente
        }}
>
{children}
</JsonContext.Provider>

    )}

export {JsonContext, JsonProvider}