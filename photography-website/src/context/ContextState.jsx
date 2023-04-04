import React, { useState } from "react";
import Context from "./Context";

const ContextState = (props)=>{

    const s1 = "";
    const [state, setState] = useState(s1);

    return (
        <Context.Provider vlaue={state}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextState;