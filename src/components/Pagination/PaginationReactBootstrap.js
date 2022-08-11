import Pagination from 'react-bootstrap/Pagination';
import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import './pagination.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const PaginationReactBootstrap = props => {
          const {
            onPageChange,
            totalCount,
            siblingCount = 1,
            currentPage,
            pageSize,
            setPageSize,
            className
          } = props;
        
          const paginationRange = usePagination({
            currentPage,
            totalCount,
            siblingCount,
            pageSize,
            setPageSize
          });
        
          const pageSizeString = pageSize + " topics" ;
        
          if (currentPage === 0 || paginationRange.length < 2) {
            return null;
          }
        
          const onNext = () => {
            onPageChange(currentPage + 1);
          };
        
        
          const onPrevious = () => {
            onPageChange(currentPage - 1);
          };
        
          let lastPage = paginationRange[paginationRange.length - 1];
          return (
                    <Pagination>
                    
                    <Pagination.Prev  onClick={onPrevious} />
                    {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <Pagination.Item
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
            </Pagination.Item>
        );
      })}
                    <Pagination.Next
        
        onClick={onNext}
      >
        <div className="arrow right" />
      </Pagination.Next>
      <DropdownButton id="dropdown-basic-button" title={pageSizeString} size="sm">
        <Dropdown.Item  onClick={() => setPageSize(6)}>6</Dropdown.Item>
        <Dropdown.Item onClick={() => setPageSize(10)}>10</Dropdown.Item>
        <Dropdown.Item onClick={() => setPageSize(15)}>15</Dropdown.Item>
      </DropdownButton>
                  </Pagination>
          );
        };

export default PaginationReactBootstrap;