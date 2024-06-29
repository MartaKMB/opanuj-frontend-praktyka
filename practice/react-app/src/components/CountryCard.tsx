import { Country } from '../types/Country';

export function CountryCard({ country }: { country: Country }) {
  return (
    <>
      <h3>{country.name.common}</h3>
      <p>{country.flag}</p>
    </>
  );
}
