// import { useEffect, useState } from "react";
// import { get } from "../services/authService";
import "../styles/Team.css";

function OurTeam() {
  
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   get("/users")
  //     .then((response) => {
  //       console.log("These are the users ===>", response.data);
  //       setUsers(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("Error getting community ===>", error);
  //     });
  // }, []);

  return (
    <div id="ourTeam">
      <h1> SANUS PR is comprised of a multidisciplinary group that works collaboratively. </h1>
      <h2> Get to know them! </h2>
      {/* {users.length > 0 && (
        <div className="gridContainer2">
          {users.map((user) => {
            return (
              <div className="userCard" key={user._id}>
                <div className="cardContainer">
                  <p className="cardText1"> Mi name is {user.name} 
                  <br/> Reach out - {user.email}</p>
                  <img className="image" src={user.profilePicURL} />
                </div>
              </div>
            );
          })}
        </div>
      )} */}
    </div>
  );
}

export default OurTeam
