import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm('');
  };

  return (
    <div  style={{display: "flex"}}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <input className="tm-page-link" type='submit' value={"Find"}  onClick={handleSearch}></input>
    </div>
  );
};

export default Search;
