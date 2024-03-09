import { memo } from "react";
import { AppStateContext } from "../App";

const AppStateProvider = ({ value, children }) => {
    return(<AppStateContext.Provider value={value}>
        {children}
    </AppStateContext.Provider>)
}

export default memo(AppStateProvider);