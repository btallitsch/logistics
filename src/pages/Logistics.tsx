import React from 'react';
import useFetch from '../hooks/useFetch';
import { LogisticsData } from '../types';

const Logistics: React.FC = () => {
  const { data, loading, error } = useFetch<LogisticsData[]>('https://api.example.com/logistics');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Logistics Data</h1>
      <ul>
        {data?.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Logistics;
