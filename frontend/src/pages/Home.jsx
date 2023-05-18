import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/workouts")
      .then((response) => {
        // console.log(response.data);
        setWorkouts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {workouts &&
        workouts.map((workout) => (
          <ul key={workout._id}>
            <li>{workout.title}</li>
          </ul>
        ))}
    </div>
  );
};

export default Home;
