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
    //filter the data destructure from props, chars represents each item
    const result = allData.filter((chars) =>
      //need the name property to lowerCase() use the .includes()pass in the search query state from our unput
      chars.name.toLowerCase().includes(searchQuery.query.toLowerCase())
    );
    //if there is a result, set the state
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
  };

  return (
    <div className="p-2">
      <button
        className="p-2 bg-slate-200 hover:bg-slate-700 hover:text-white rounded-md"
        onClick={handleToggleSearch}
      >
        {toggleSearch ? "Close Search" : "Open Search"}
      </button>
      {toggleSearch && (
        <section>
          <form onSubmit={submitHandler}>
            <div className='flex flex-col my-4'>
              <label className="text-lg font-bold">Search for a character, starship, or vehicle.</label>
              <input
                className="border border-black rounded-md my-4 w-3/4"
                type="text"
                onChange={changeHandler}
                name="query"
              />
              <button className="p-2 w-28 bg-slate-200 hover:bg-slate-700 hover:text-white rounded-md">
                Search
              </button>
            </div>
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
