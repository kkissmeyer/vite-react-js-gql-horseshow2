import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

// Mock data for horse shows and their results
const mockFetchHorseShowData = async () => {
  return [
    {
      id: 1,
      name: 'Spring Classic',
      results: [
        { id: 1, horse: 'Thunder', rider: 'Alice', place: 1 },
        { id: 2, horse: 'Starlight', rider: 'Bob', place: 2 },
      ],
    },
    {
      id: 2,
      name: 'Summer Breeze',
      results: [
        { id: 3, horse: 'Shadow', rider: 'Charlie', place: 1 },
        { id: 4, horse: 'Blaze', rider: 'Dana', place: 2 },
      ],
    },
    {
      id: 3,
      name: 'Autumn Gala',
      results: [
        { id: 5, horse: 'Daisy', rider: 'Eve', place: 1 },
        { id: 6, horse: 'Frost', rider: 'Frank', place: 2 },
      ],
    },
  ];
};

const HorseShowPage = () => {
  const { data: horseShows = [], isLoading, isError } = useQuery({
    queryKey: ['horseShows'],
    queryFn: mockFetchHorseShowData,
  });

  const [selectedShowId, setSelectedShowId] = useState<number | null>(null);

  const handleShowChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedShowId(Number(event.target.value));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading horse shows.</div>;

  const selectedShow = horseShows.find(show => show.id === selectedShowId);

  return (
    <div>
      <h1>Horse Shows</h1>
      <label htmlFor="horseShowSelect">Select a Horse Show:</label>
      <select id="horseShowSelect" onChange={handleShowChange} value={selectedShowId || ''}>
        <option value="">--Select a show--</option>
        {horseShows.map(show => (
          <option key={show.id} value={show.id}>
            {show.name}
          </option>
        ))}
      </select>

      {selectedShow && (
        <div>
          <h2>Results for {selectedShow.name}</h2>
          <ul>
            {selectedShow.results.map(result => (
              <li key={result.id}>
                {result.horse} - {result.rider} (Place: {result.place})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HorseShowPage;
