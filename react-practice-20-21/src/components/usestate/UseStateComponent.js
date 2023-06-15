import React, { useState} from 'react';

function useStateComponent() {
    const [count, setCount] = useState(0);
    const [year, setYear] = useState(2019);
    return (
        <div className="content">
            <h1>Change Year <br/>{year}</h1>
            <button type="button" onClick={()=>setYear(2020)}>
                Change
            </button>
            <br/>
            <h2>Simple paragraph</h2>
            <p>A simple paragraph is <big>{count}</big> comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.” It introduces the topic of the paragraph, setting its tone and mood. The next few sentences elaborate, explain, and exemplify the topic introduced in it.</p>
            <button onClick={() => setCount(count + 1)}>plus</button> &nbsp;
            <button onClick={() => setCount(count - 1)}>minus</button>
        </div>
    )
}
export default useStateComponent;
