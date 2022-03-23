import React, { useState, useEffect } from "react";
import Axios from "../libraries/Axios";
import { useNavigate, useParams } from "react-router-dom";
import StudentProfile from "./StudentProfile";

const EditStudent = () => {
  let { id } = useParams();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [courses, setCourses] = useState("");

  let redirect = useNavigate();
  useEffect(() => {
    let StudentProfile = async () => {
      let stuData = await Axios.get(`/${id}`);
      let { payload } = stuData.data;
      // console.log(payload)
      let { name, email, courses } = payload;
      setName(name);
      setEmail(email);
      setCourses(courses);
    };
    StudentProfile();
  }, [id]);

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let payload = { name, email, courses };
      await Axios.put(`/${id}`, payload);
      setName("");
      setEmail("");
      setCourses("");
      redirect("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="formBlock">
      <article>
        <div>
          <h1>CREATE STUDENTS</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="courses">courses</label>
              <select
                name="courses"
                id=""
                onChange={(e) => setCourses(e.target.value)}
              >
                <option value="java">java</option>
                <option value="react">react</option>
                <option value="nodejs">nodejs</option>
                <option value="python">python</option>
              </select>
            </div>
            <div>
              <button>Save Data</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default EditStudent;
