import React from "react";
import DashboardCardPage from "./DashboardCard/DashboardCardPage";
import DashboardCreateTopicModal from "./DashboardTopicCreateModal";
import { useState } from "react";
import FilterTopics from "../Filter/FilterTopics";
import Pagination from "../Pagination/Pagination";
import PaginationDeterminePerPage from "../Pagination/PaginationDeterminePerPage";
import useDashboardData from "./Data/useDashboardData";
import './style/DashboardPageStyle.scss'
import usePaginatedData from "./Data/usePaginatedData";



const DashboardPage = () => {


  const [filterStates, setFilterStates] = useState('new');
  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedData = usePaginatedData({ filterStates: filterStates, pageSize: pageSize, currentPage: currentPage })
  const rowData = useDashboardData()



  return (
    <>
      <DashboardCreateTopicModal />
      <FilterTopics setFilterStates={setFilterStates} />
      <DashboardCardPage data={paginatedData} />
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={rowData.length}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      <PaginationDeterminePerPage
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </>
  )
}

export default DashboardPage;