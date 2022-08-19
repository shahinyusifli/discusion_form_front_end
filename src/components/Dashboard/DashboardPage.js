import React from "react";
import DashboardCardPage from "./DashboardCard/DashboardCardPage";
import DashboardCreateTopicModal from "./DashboardTopicCreateModal";
import { useState, useMemo } from "react";
import FilterTopics from "../Filter/FilterTopics";
import Pagination from "../Pagination/Pagination";
import PaginationDetermineTopicsPerPage from "../Pagination/PaginationDetermineTopicsPerPage";
import useDashboardData from "./useDashboardData";
import './style/DashboardPageStyle.scss'


const DashboardPage = () => {

 
 const [filterStates, setFilterStates] = useState('new');
 const checkFilteringStates = (value) => {
  if (filterStates === 'dsc' ) {
    return value.sort((a, b) => -1 * a.topicContent.localeCompare(b.topicContent));
    
  }

  if (filterStates === 'asc') {
    return value.sort((a, b) => a.topicContent.localeCompare(b.topicContent));
  }

  if (filterStates === 'new') {
    return value.sort(function(a,b){return new Date(b.timeOfLastMessage) - new Date(a.timeOfLastMessage);});;
  }
  
};
 const [currentPage, setCurrentPage] = useState(1);
 const [pageSize, setPageSize] = useState(6)
 const content = checkFilteringStates(useDashboardData(filterStates, pageSize))

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return content.slice(firstPageIndex, lastPageIndex);
  }, [pageSize ,content, currentPage]);
 

  return (
       <>
       <DashboardCreateTopicModal />
       <FilterTopics setFilterStates={setFilterStates}/>
       <DashboardCardPage data={currentTableData} />
       <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={content.length}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      <PaginationDetermineTopicsPerPage
      pageSize={pageSize}
      setPageSize ={setPageSize}
      />
       </>
  )
}

export default DashboardPage;