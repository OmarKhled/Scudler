import { Fragment } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

// const results = ["result", "omar", "ahmed", "heba", "hasouna"];
const results = [];

const SearchBar = () => {
  return (
    <Fragment>
      <InputGroup className={`mt-3`}>
        <FormControl
          placeholder="Search for course"
          className={`${results.length > 0 && "search-results"}`}
        />
        <InputGroup.Text className="search-icon">
          <FaSearch />
        </InputGroup.Text>
        {results.length > 0 && (
          <ul className="results">
            {results.map((result) => (
              <li className="result-item">
                <p>{result}</p>
              </li>
            ))}
          </ul>
        )}
      </InputGroup>
    </Fragment>
  );
};

export default SearchBar;
