import React, { useState } from 'react';
import LiveSearchFilterImgComponent from './LiveSearchFilterImgComponent';

const LiveSearchFilterComponent = () => {
    const [img, setImg] = useState("");
    const searchFilter = (event) => {
        const data = event.target.value;
        setImg(data);
    }

    return (
        <div className="content">
            <input value={img} onChange={searchFilter}/>
            <LiveSearchFilterImgComponent name={img}/>
        </div>
    )
}
export default LiveSearchFilterComponent;
