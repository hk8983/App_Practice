import React, { useState } from 'react';

const LocalStorageComponent =() => {
    const [name, setName] = useLocalStorage('name', '');
    return (
        <div className="content">
            <h3>{name}</h3>
            <input type="text" onChange={e => { setName(e.target.value) }} value={name} />
        </div>
    )
}
const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
    }
    return [storedValue, setValue];
}
export default LocalStorageComponent;
