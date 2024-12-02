import React from 'react'
import Header from '../../List/Header'
import CreateTask from '../../List/CreateTask'
import AllTask from '../../List/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <Header changeUser ={props.changeUser} />


            <CreateTask/>
            <AllTask/>
        </div>
    )
}

export default AdminDashboard
