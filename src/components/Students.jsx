import React, { useState, Fragment, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Axios from "../libraries/Axios";

const Students = () => {
  let [loading, setLoading] = useState(false);
  let [students, setStudent] = useState([]);
  let redirect = useNavigate();

  useEffect(() => {
    let GetData = async () => {
      let data = await Axios.get("");
      console.log(data.data.payload);
      setStudent(data.data.payload);
      // setLoading(true)
    };
    GetData();
  }, []);

  //! delete student
  let deleteStudent = async (id) => {
    await Axios.delete(`/${id}`);
    alert("student data deleted")
    window.location.assign("/");
    // redirect("/create-student")
  };

  return (
    <section id="tableBlock">
      <article>
        <div>
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>email</th>
                <th>courses</th>
                <th>View profie</th>
                <th>edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {students.map((stu) => {
                return (
                  <tr key={stu._id}>
                    <td>{stu.name}</td>
                    <td>{stu.email}</td>
                    <td>{stu.courses}</td>
                    <td>
                      <Link to={`view-profile/${stu._id}`}>view Porfile</Link>
                    </td>
                    <td>
                      <Link to={`edit-student/${stu._id}`}>edit</Link>
                    </td>
                    <td>
                      <button onClick={() => deleteStudent(stu._id)}>
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
};

export default Students;






{/* <div id="card">

<div className="card-title">{stu.name}</div>
<div className="des">
  <p>
    <span>Email : </span>
    {stu.email}
  </p>
  <p>
    <span>Course: </span>
    {stu.courses}
  </p>
  <p>
    <span>Bowling Style : </span>
    {post.bowlingStyle}
  </p>
</div>
</div> */}