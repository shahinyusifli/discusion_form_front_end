import React, { useEffect } from 'react';
import DashboardDetailTablePage from './DashboardDetailTable/DashboardDetailTablePage';
import useDashboardDetailData from './useDashboardDetailData';
import Pagination from '../../Pagination/Pagination';
import { useState } from 'react';
import useMemoHook from '../../Pagination/useMemo';
import PaginationDeterminePerPage from '../../Pagination/PaginationDeterminePerPage';

const DashboardDetailPage = () => {

  const messages = useDashboardDetailData()
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6)
  const paginatedDaata = useMemoHook({ currentPage: currentPage, content: messages, pageSize: pageSize })


  return (
    <>
      <DashboardDetailTablePage messages={paginatedDaata} />
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={messages.length}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      <PaginationDeterminePerPage 
                    setPageSize={setPageSize} 
                    pageSize={pageSize}  />
    </>

  );
}

export default DashboardDetailPage;
