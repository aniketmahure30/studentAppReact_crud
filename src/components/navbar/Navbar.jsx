import React from "react";
import { Link, useParams } from "react-router-dom";

const Navbar = () => {
  let { id } = useParams();

  return (
    <section id="navBlock">
      <article>
        
          <div className="logoBlock">Student App</div>
          <div className="menuBlock">
            <ul>
              <li>
                <Link to="/">All Students</Link>
              </li>
              <li>
                <Link to="/create-student">Create Student</Link>
              </li>
              {/* <li>
                <Link to={`/${id}`}>Edit Sutdent</Link>
              </li> */}
            </ul>
          </div>
        
      </article>
    </section>
  );
};

export default Navbar;
