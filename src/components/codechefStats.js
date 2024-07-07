import React, { useEffect, useState } from "react";


const ContestRating = () => {
  const [currentRating, setCurrentRating] = useState(null);
  const [highestRating, setHighestRating] = useState(null);
  const [star, setStar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://codechef-api.vercel.app/g_gupta17"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCurrentRating(data.currentRating);
        setHighestRating(data.highestRating);
        setStar(data.stars);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return <div className="">
    <div className="currentRating">Current Rating: {currentRating}</div>
    <div className="highestRating">Highest Rating: {highestRating}</div>
    <div className="star">{star} coder</div>

  </div>;
};


class codechefStats extends React.Component {
  render() { 
    return (
      <ContestRating/>
    );
  }
}
 
export default codechefStats;