import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const PaginationDetermineTopicsPerPage = props => {
          const {
                    setPageSize, 
                    pageSize  
                    } = props;

          const pageSizeString = pageSize + " topics" ;
                
  return (
          <DropdownButton id="dropdown-basic-button" title={pageSizeString} size="sm">
          <Dropdown.Item  onClick={() => setPageSize(6)}>6</Dropdown.Item>
          <Dropdown.Item onClick={() => setPageSize(10)}>10</Dropdown.Item>
          <Dropdown.Item onClick={() => setPageSize(15)}>15</Dropdown.Item>
        </DropdownButton>
  );
}

export default PaginationDetermineTopicsPerPage;