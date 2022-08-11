import Dropdown from 'react-bootstrap/Dropdown';
import FilterTopicsDropDownItems from './FilterTopicsDropDownItems';


const FilterTopicsDropDown = ({ setFilterStates }) => {
  return (
    <Dropdown>
      <FilterTopicsDropDownItems setFilterStates={setFilterStates} />
    </Dropdown>

  );
}

export default FilterTopicsDropDown; 