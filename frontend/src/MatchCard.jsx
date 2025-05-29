import React from "react";

const MatchCard = ({ match }) => {
  const matchDate = new Date(match.date).toLocaleString();

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">
        {match.homeTeam} vs {match.awayTeam}
      </h2>
      <p className="text-sm text-gray-400">Scheduled at: {matchDate}</p>
    </div>
  );
};

export default MatchCard;
