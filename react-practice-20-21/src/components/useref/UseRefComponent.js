import React, { useRef,useState  } from 'react';

const UseRefComponent = () => {
    const [name, setName] = useState("hardik");
    let nameRef = useRef();
    const UpdateName = () => {
        setName(nameRef.current.value);
    }

    return (
        <div className="content">
            <h3>New Name is {name}</h3>
            <input ref={nameRef} placeholder="Change Your Name" /> &nbsp;
            <button type="button" onClick={UpdateName}>
                Submit
            </button>
        </div>
    )
}
export default UseRefComponent;