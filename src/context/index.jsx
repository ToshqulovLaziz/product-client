import React from "react";
import PropTypes from "prop-types";

const Context = React.createContext(null);

const Provider = ({children}) => {
    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}

Provider.propTypes = {
  children: PropTypes.object,
};

export {Context, Provider};
