import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  const navigate = useNavigate();
  return (
    <div className="service p-3">
      <img className="w-100 rounded" src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button
        onClick={() => navigate(`/service/${id}`)}
        className="btn btn-primary"
      >
        Book: {name}
      </button>
    </div>
  );
};

export default Service;
