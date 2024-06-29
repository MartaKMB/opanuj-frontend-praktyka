import { useEffect, useState } from 'react';
import { Country } from '../types/Country';

export function useCountriesSearch(name: string) {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    if (name) {
      fetch(
        `https://restcountries.com/v3.1/capital/${name}`
      )
        .then((response) => response.json())
        .then((data) => setCountries(data || []))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [name]);

  return countries;
}
