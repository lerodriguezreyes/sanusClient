import { useEffect, useState } from "react";
import "../styles/Team.css";
import { get } from "../services/API";
import Navbar from "../components/Navbar.jsx"
function OurTeam() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    get("/user")
      .then((response) => {
        console.log("These are the users ===>", response.data);
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.log("Error getting user data ===>", error);
      });
  }, []);

  return (
    <div id="ourTeam">
      <Navbar />
      <h1>
        {" "}
        SANUS Puerto Rico está compuesto de un equipo multidisciplinario comprometido con la salud oral.{" "}
      </h1>
      <h2> Conócelos! </h2>
      {users.length > 0 && (
        <div className="gridContainer2">
          {users.map((user) => {
            return (
              <div className="userCard" key={user._id}>
                <div className="cardContainer">
                  <p className="cardText1">
                    Nombre: {user.name}
                    <br /> Posición: {user.position_spanish}
                    <br /> Email: {user.email}
                  </p>

                  <img className="image" src={user.profilePicURL} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default OurTeam;
