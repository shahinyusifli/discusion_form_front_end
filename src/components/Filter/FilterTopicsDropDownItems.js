import Dropdown from 'react-bootstrap/Dropdown';

const FilterTopicsDropDownItems = ({ setFilterStates }) => {



          const handleFilterDscClick = () => {

                    setFilterStates('dsc');
          };

          const handleFilterAscClick = () => {

                    setFilterStates('asc');
          };

          const handleFilterNewOneClick = () => {

                    setFilterStates('new')
          };

          return (
                    <>
                              <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Filter topics
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleFilterDscClick()}>Sort descending order</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleFilterAscClick()}>Sort ascending order</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleFilterNewOneClick()}>Sorting the newest one</Dropdown.Item>
                              </Dropdown.Menu>
                    </>
          );
}

export default FilterTopicsDropDownItems; 