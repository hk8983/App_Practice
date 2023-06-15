import React from 'react';
const ListComponent = () => {
    const list = [
        { id: 1, name: "Hardik" },
        { id: 2, name: "Vivek" },
        { id: 3, name: "Kishan" },
        { id: 4, name: "Chirag" }
    ];
    return (
        <div className="content">
            
            <h3>List Render</h3>
            <ol type="a" style={{ marginTop: "40px" }}>
                {
                    list.map(c =>
                        <li key={c.id} style={{ marginBottom: "40px" }}>{c.id}. My Name is <br /> <br /> <b>{c.id}. {c.name}</b></li>
                    )
                }
            </ol>
        </div>
    )
}
export default ListComponent;