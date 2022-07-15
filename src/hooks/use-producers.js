import { useEffect, useState } from 'react';

import { loadProducers } from '../services/load-data';

export function useProducers() {
  const [title, setTitle] = useState('');
  const [producers, setProducers] = useState([]);

  useEffect(() => {
    const producersData = loadProducers();
    setTitle(producersData.title);
    producersData.list.sort(({ distance }, { distance: comparation }) => {
      return distance - comparation;
    });
    setProducers(producersData.list);
  }, []);

  return [title, producers];
}
