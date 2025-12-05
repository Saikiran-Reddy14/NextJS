import React from 'react';

const DynamicRoute = ({ params, searchParams }) => {
  console.log(params, searchParams);
  return (
    <div>
      <h1>Dynamic Route Page</h1>
      <p>Meal Slug: {params.mealSlug}</p>
      <p>Search params: {JSON.stringify(searchParams)}</p>
    </div>
  );
};

export default DynamicRoute;
