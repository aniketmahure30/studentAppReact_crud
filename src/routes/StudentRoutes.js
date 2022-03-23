import { useRoutes } from "react-router-dom";
import CreateStudent from "../components/CreateStudent";
import EditStudent from "../components/EditStudent";
import Students from "../components/Students";




import React from 'react'
import StudentProfile from "../components/StudentProfile";

const StudentRoutes = () => {
    let StuRoutes =useRoutes([
        {
            path :"/",
            element: <Students/>,
        },
        {
            path:"/create-student",
            element:<CreateStudent/>,
        },
        {
            path:"/edit-student/:id",
            element:<EditStudent/>,
        },
        {
            path:"/view-profile/:id",
            element:<StudentProfile/>
        }
    ])
    return StuRoutes
}

export default StudentRoutes