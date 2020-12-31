import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const url =
  "https://springboot-spacecrafts-api.herokuapp.com/api/v1/spacecrafts/";

const DetailSpacecraftComponent = () => {
  const { id } = useParams();
  const [spacecraft, setSpacecraft] = useState({});
  const [categoryName, setCategoryName] = useState("");

  const getSpacecraft = async () => {
    const { data } = await axios.get(url + id);
    setSpacecraft(data);
    setCategoryName(data.category.name);
    return spacecraft;
  };

  useEffect(() => {
    getSpacecraft();
  }, []);

  //   fetch(url + id)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setSpacecraft(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  return (
    <div class="container">
      <h1 class="font-weight-light mt-4">
        <strong>Spacecraft: </strong>
        {spacecraft.spacecraft_name}
      </h1>
      <hr />

      <div class="row align-items-center">
        <div class="col-lg-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src={`/images/${spacecraft.spacecraft_image}`}
            alt={spacecraft.spacecraft_name}
          />
        </div>

        <div class="col-lg-5">
          <p>
            <strong>Launch: </strong>
            {spacecraft.spacecraft_launch}
          </p>
          <p>
            <strong>Mission: </strong>
            {spacecraft.spacecraft_mission}
          </p>
        </div>
      </div>

      <div class="row align-items-center" id="spacecraft">
        <div class="col-lg-12">
          <p>
            <strong>Detail Description of Mission: </strong>
            {spacecraft.spacecraft_description_of_mission}
          </p>
          <p>
            <strong>Phase: </strong>
            {spacecraft.spacecraft_phase}
          </p>
          <p>
            <strong>Total Days Spent in Space: </strong>
            {spacecraft.spacecraft_days_in_orbit}
          </p>
          <p>
            <strong>Category: </strong>
            {categoryName}
          </p>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default DetailSpacecraftComponent;
