// src/ServiceDetails.js
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchServiceDetails } from "./actions";

function ServiceDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { service, loading, error } = useSelector(
    (state) => state.serviceDetails
  );

  useEffect(() => {
    dispatch(fetchServiceDetails(id));
  }, [dispatch, id]);

  if (loading) return <p>...Is loading</p>;
  if (error)
    return (
      <div>
        <p>Произошла ошибка</p>
        <button onClick={() => dispatch(fetchServiceDetails(id))}>
          Повторить запрос
        </button>
      </div>
    );

  return (
    <div>
      <h2>{service.name}</h2>
      <p>Price: {service.price}</p>
      <p>{service.content}</p>
      <Link to='/'>Назад к списку</Link>
    </div>
  );
}

export default ServiceDetails;
