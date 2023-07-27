/* eslint-disable react/prop-types */
import { useState } from "react";
import StarWarsCard from "./StarWarsCard";

const SearchForm = ({ allData }) => {
  const [searchQuery, setSearchQuery] = useState({ query: "" });
  const [searchResult, setSearchResult] = useState(null);
  const [notFound, setNotFound] = useState("");
  const [toggleSearch, setToggleSearch] = useState(true);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSearchQuery((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const result = allData.filter((chars) =>
      chars.name.toLowerCase().includes(searchQuery.query.toLowerCase())
    );
    if (result.length > 0) {
      setSearchResult(result[0]);
      setNotFound("");
    } else {
      setSearchResult(null);
      setNotFound("Result Not Found");
    }
    setSearchQuery({ query: "" });
  };

  const handleToggleSearch = () => {
    setToggleSearch((prevToggleSearch) => !prevToggleSearch);
    if (!toggleSearch) {
        setSearchQuery({ query: "" });
        setSearchResult(null);
        setNotFound("");
  }
}

  return (
    <div>
      <button onClick={handleToggleSearch}>
        {toggleSearch ? "Close Search" : "Open Search"}
      </button>
      {toggleSearch && (
        <section>
          <form onSubmit={submitHandler}>
            <label>Search for a character, starship, or vehicle.</label>
            <input
              className="border border-black rounded-md mx-2"
              type="text"
              onChange={changeHandler}
              name="query"
            />
            <button>Search</button>
          </form>
          <div>
            {searchResult && <StarWarsCard data={searchResult} />}
            {notFound && <p>{notFound}</p>}
          </div>
        </section>
      )}
    </div>
  );
};

export default SearchForm;
