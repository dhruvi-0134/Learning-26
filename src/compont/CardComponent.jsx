import React from "react";

export const CardComponent = (props) => {
  return (
    <div className="container mt-5">
      <div className="card custom-card" style={{ width: "16rem" }}>
        <img
          src="https://picsum.photos/300/200"
          className="card-img-top"
          alt="image"
          style={{ height: "200px", width: "100%" }}
        />

        <div className="card-body">
          <h5 className="card-title">{props.title || "TITLE"}</h5>
          <p className="card-text">
            {props.description || "DESCRIPTION"}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
