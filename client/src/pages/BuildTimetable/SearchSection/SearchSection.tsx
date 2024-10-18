import "./SearchSection.style.scss";

interface SearchSectionProps {
  onSearch: () => void;
}
function SearchSection({ onSearch }: SearchSectionProps) {
  return (
    <div className="SearchSection">
      <button onClick={() => onSearch()}>Search</button>
    </div>
  );
}

export default SearchSection;
