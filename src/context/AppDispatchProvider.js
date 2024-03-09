import { memo } from "react";
import { AppDispatchContext } from "../App";

const AppDispatchProvider = ({ value, children }) => {
    return(<AppDispatchContext.Provider value={value}>
        {children}
    </AppDispatchContext.Provider>)
}

export default memo(AppDispatchProvider);