import React from "react";
import API from "../utils/API";

function Body() {
  API.getUsers().then((res) => {
    console.log(res.data.results);
  });

  return (
    <div>
      <p>hi</p>
    </div>
  );
}

export default Body;
