import React from 'react';

const LiveSearchFilterImgComponent = (props) => {
    const img = `https://source.unsplash.com/600x400/?${props.name}`;
    
    return (
        <div className="content">
            <img style={{marginTop: '30px', maxWidth: '300px'}} src={img} alt="search-filter"/>
        </div>
    )
}
export default LiveSearchFilterImgComponent;
