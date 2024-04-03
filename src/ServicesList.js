// src/ServicesList.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "./actions";

function ServicesList() {
  const dispatch = useDispatch();
  const { services, loading, error } = useSelector(
    (state) => state.servicesList
  );

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  if (loading) return <p>...Is loading</p>;
  if (error)
    return (
      <div>
        <p>Произошла ошибка</p>
        <button onClick={() => dispatch(fetchServices())}>
          Повторить запрос
        </button>
      </div>
    );

  return (
    <ul>
      {services.map((service) => (
        <li key={service.id}>
          <Link to={`/${service.id}/details`}>{service.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default ServicesList;
