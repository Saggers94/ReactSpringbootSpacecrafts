import React, { useState } from "react";
import useFetch from "../customHooks/useFetch";

const url =
  "https://springboot-spacecrafts-api.herokuapp.com/api/v1/spacecrafts";

const SpacecraftsComponent = () => {
  const { spacecrafts } = useFetch(url);
  //   const [spacecraftsInState, setSpacecraftsInState] = useState([]);
  console.log(spacecrafts);
  // setSpacecraftsInState(spacecrafts);

  return (
    <div class="container">
      <h1 class="mt-4">Top Spacecrafts</h1>
      <hr />
      {spacecrafts.map((spacecraft) => (
        <div class="row align-items-center" id="spacecraft">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={`/images/${spacecraft.spacecraft_image}`}
              alt={spacecraft.spacecraft_name}
            />
          </div>

          <div class="col-lg-5">
            <h2 class="font-weight-light">{spacecraft.spacecraft_name}</h2>
            <p>
              <strong>Mission: </strong>
              {spacecraft.spacecraft_mission}
            </p>
            <a
              class="btn btn-primary"
              href={`/spacecrafts/${spacecraft.spacecraft_id}`}
            >
              Read More!
            </a>
          </div>
        </div>
      ))}

      <hr />
    </div>
  );
};

export default SpacecraftsComponent;
