import { Country } from '../types/Country';
import { CountryCard } from './CountryCard';

export function CountryList({ countries }: { countries: Country[] }) {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.ccn3}>
          <CountryCard country={country} />
        </li>
      ))}
    </ul>
  );
}
