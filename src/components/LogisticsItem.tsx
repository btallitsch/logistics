import React from 'react';
import { LogisticsData } from '../types';

interface LogisticsItemProps {
  item: LogisticsData;
}

const LogisticsItem: React.FC<LogisticsItemProps> = React.memo(({ item }) => {
  console.log(`Rendering item: ${item.name}`);
  return <li>{item.name}</li>;
});

export default LogisticsItem;
