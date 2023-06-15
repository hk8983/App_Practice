import React from 'react';
import { useLocation,useHistory } from "react-router-dom";

function UseLocationComponent() {
    let newlocation = useLocation();
    let newHistory = useHistory();
    return (
        <div className="content">
            {newlocation.pathname === '/use-location/hardik' ? <button onClick={()=> newHistory.goBack()}>hkkk</button> : null}
            <h1>my current location is a {newlocation.pathname} </h1>
        </div>
    )
}
export default UseLocationComponent;
