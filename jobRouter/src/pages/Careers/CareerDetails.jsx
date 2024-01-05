import { useLoaderData, useParams, Link } from "react-router-dom";

const CareerDetails = () => {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2> Career Details for {career.title} </h2>
      <p>Starting Salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">Description: {career.details}</div>
      <Link to="/careers">Back to Careers</Link>
    </div>
  );
};

export default CareerDetails;

// loader function

export const CareerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);
  if (!res.ok) {
    throw Error("Could Not find the Career");
  }
  return res.json();
};
