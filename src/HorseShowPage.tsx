// HorseShowPage.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';

interface ShowData {
  id: number;
  showName: string;
}

// Simulated data fetch function
const mockFetchHorseShowData = async (): Promise<ShowData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, showName: 'Spring Classic' },
        { id: 2, showName: 'Summer Breeze' },
        { id: 3, showName: 'Autumn Gala' },
      ]);
    }, 1000);
  });
};

function HorseShowPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['horseShows'],
    queryFn: mockFetchHorseShowData,
  });

  if (isLoading) return <p>Loading horse shows...</p>;
  if (isError) return <p>Failed to load horse shows.</p>;

  return (
    <div>
      <h1>Horse Shows</h1>
      <ul>
        {(data || []).map((show) => (
          <li key={show.id}>{show.showName}</li>
        ))}
      </ul>
    </div>
  );
}

export default HorseShowPage;
