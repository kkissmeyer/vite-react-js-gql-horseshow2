// src/HorseShowPage.tsx
import React from 'react';

const HorseShowPage: React.FC = () => {
  return (
    <div>
      <h1>Horse Show Results</h1>
      <p>Welcome to the horse show competition results page!</p>
      <table border="1">
        <thead>
          <tr>
            <th>Show Name</th>
            <th>Date</th>
            <th>Location</th>
            <th>Horse Name</th>
            <th>Rider Name</th>
            <th>Placing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spring Classic</td>
            <td>April 14, 2023</td>
            <td>Lexington, KY</td>
            <td>Star Struck</td>
            <td>Jane Doe</td>
            <td>1st</td>
          </tr>
          <tr>
            <td>Summer Breeze</td>
            <td>June 10, 2023</td>
            <td>Ocala, FL</td>
            <td>Wind Dancer</td>
            <td>John Smith</td>
            <td>2nd</td>
          </tr>
          <tr>
            <td>Autumn Gala</td>
            <td>September 18, 2023</td>
            <td>Tryon, NC</td>
            <td>Golden Glory</td>
            <td>Susan Lee</td>
            <td>3rd</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HorseShowPage;
