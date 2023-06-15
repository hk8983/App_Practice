import React, { useContext } from 'react';
const MoneyContext = React.createContext();

const UseContextComponent = () => {
    return (
        <MoneyContext.Provider value="555">
            <Parent />
        </MoneyContext.Provider>
    )
}

const Parent = () => {
    return (
        <Child />
    )
}

const Child = () => {
    const money = useContext(MoneyContext);
    return (
        <div className="content">
            <h1>I am UseContext, <br/>UseContext value is <i>{money}</i></h1>
        </div>
    )
}

export default UseContextComponent;
