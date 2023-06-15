import React, { useState } from 'react';
import UserTable from './UserTable';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm'

const TableComponent = () => {
    // const data = {
    //     name: '',
    //     email: ''
    // };
    // const [signupData, setSignupData] = useState(data);
    // function onChange(e) {
    //     setSignupData({ ...signupData, [e.target.name]: e.target.value });
    // }

    const usersData = [
        { id: 1, name: 'Tania', username: 'floppydiskette' },
        { id: 2, name: 'Craig', username: 'siliconeidolon' },
        { id: 3, name: 'Ben', username: 'benisphere' },
    ]
    /* add row */
    const [users, setUsers] = useState(usersData);
    const addUser = (user) => {
        user.id = users.length + 1
        // setSignupData({ ...signupData, [e.target.name]: e.target.value });
        setUsers([...users, user])
    }
    /* edit row */
    const [editing, setEditing] = useState(false)

    const initialFormState = { id: null, name: '', username: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const editRow = (user) => {
        setEditing(true)
        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
    }
    /* delete row */
    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }
    return (
        <div className="content">
            <h1>DataTable</h1>
            <div className="datatable">
                <div className="flex-large">
                    {editing ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                            <div>
                                <h2>Add user</h2>
                                <AddUserForm addUser={addUser} />
                            </div>
                        )}
                </div>
                <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
                </div>
            </div>
        </div>
    )
}
export default TableComponent;