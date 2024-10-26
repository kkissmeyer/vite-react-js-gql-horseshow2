import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const API_ENDPOINT = `https://api.example.com`; // Replace with your actual API endpoint

// Mock function to fetch horse show results based on the selected show ID
const fetchHorseShowResults = async (showId) => {
  const response = await fetch(`${API_ENDPOINT}/shows/${showId}/results`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Mock data for horse shows
const horseShows = [
  { id: '1', name: 'Spring Classic' },
  { id: '2', name: 'Summer Breeze' },
  { id: '3', name: 'Autumn Gala' },
];

const HorseShowPage = () => {
  const [selectedShow, setSelectedShow] = useState(horseShows[0]?.id); // Default to the first show

  // Query for fetching results based on selected show
  const { data: results, isLoading, isError } = useQuery(
    ['showResults',selectedShow],
    () => fetchHorseShowResults(selectedShow)
  );

  return (
    <div>
      <h1>Horse Shows</h1>
      <select
        value={selectedShow}
        onChange={(e) => setSelectedShow(e.target.value)}
      >
        {horseShows.map((show) => (
          <option key={show.id} value={show.id}>
            {show.name}
          </option>
        ))}
      </select>

      {isLoading && <p>Loading results...</p>}
      {isError && <p>Error fetching results!</p>}
      {results && results.length > 0 && (
        <div>
          <h2>Results for {horseShows.find((s) => s.id === selectedShow)?.name}</h2>
          <ul>
            {results.map((result) => (
              <li key={result.id}>{result.name}: {result.position}</li>
            ))}
          </ul>
        </div>
      )}
      {results && results.length === 0 && (
        <p>No results found for this show.</p>
      )}
    </div>
  );
};

export default HorseShowPage;

