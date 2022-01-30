import { SearchLabel } from "./Filter.styled";
import PropTypes from "prop-types";

export const Filter = ({ value, onChange }) => (
  <div>
    <SearchLabel htmlFor="filter">Find contacts by name</SearchLabel>
    <input htmlFor="filter" type="name" value={value} onChange={onChange} />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
