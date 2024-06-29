import React from 'react';

type SortSelectProps = {
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
};

const SortSelect: React.FC<SortSelectProps> = ({
  sortOption,
  setSortOption,
}) => {
  return (
    <label className="flex flex-col">
      Sort by
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="">Initial</option>
        <option value="alphabetical">Alphabetical</option>
        <option value="population">Population</option>
      </select>
    </label>
  );
};

export default SortSelect;
