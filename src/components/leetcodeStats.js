import React, { useEffect, useState } from "react";

const SolvedProblem = () => {
  const [solvedProblem, setSolvedProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch(
          "https://alfa-leetcode-api.onrender.com/Ggupta02/solved"
        );
        if (!response1.ok) {
          throw new Error("Network response1 was not ok");
        }
        const data = await response1.json();
        setSolvedProblem(data.solvedProblem);
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

  return <div className="questionSolved">
  Questions Solved: {solvedProblem}</div>;
};

const ContestRating = () => {
  const [contestRating, setContestRating] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response2 = await fetch(
          "https://alfa-leetcode-api.onrender.com/Ggupta02/contest"
        );
        if (!response2.ok) {
          throw new Error("Network response2 was not ok");
        }
        const data = await response2.json();
        setContestRating(Math.round(data.contestRating));
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

  return <div className="rating">Contest Rating: {contestRating}</div>;
};

class leetcodeStats extends React.Component {
  render() {
    return <div>
      <SolvedProblem/>
      <ContestRating/>
    </div>;
  }
}

export default leetcodeStats;
