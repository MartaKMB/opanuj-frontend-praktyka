import { useState } from 'react'
import { useCountriesSearch } from '../hooks/useCountriesSearch';
import { CountryList } from '../components/CountryList';
import { sortCountries } from '../utils/sortCountries';
import SortSelect from '../components/SortSelect';

function CountrySearchContainer() {
  const [capitalName, setCapitalName] = useState<string>('');
  const countries = useCountriesSearch(capitalName);
  const [sortOption, setSortOption] = useState('');

  const sortedCountries = sortCountries(countries, sortOption);

  return (
    <>
      <h1>Wyszukiwarka kraju po nazwie stolicy</h1>
      <label>
        Capital Name
        <input
          type="text"
          value={capitalName}
          onChange={(e) => setCapitalName(e.target.value)}
        />
      </label>
      <SortSelect sortOption={sortOption} setSortOption={setSortOption} />
      <CountryList countries={sortedCountries} />
    </>
  )
}

export default CountrySearchContainer;