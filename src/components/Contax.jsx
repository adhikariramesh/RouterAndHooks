import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ Children }) => {
    return (<AppContext.Provider value="Ramesh Adhikari">
        {Children}
    </AppContext.Provider>);
};

export { AppContext, AppProvider };