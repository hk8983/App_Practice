import React, { useEffect, useState } from 'react';

const ResponsiveComponent = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    }, []);
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    return (
        <div className="content">
            <h3>Window width {width}</h3>
            <h3>Window height {height}</h3>
        </div>
    );
}

export default ResponsiveComponent;