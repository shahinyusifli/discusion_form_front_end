import React, { Component } from "react";
import UserService from "../../services/User/user.service";
import axios from "axios";
import DashboardCard from "./DashboardCard";
import DashboardCreateTopicModal from "./DashboardTopicCreateModal";
import { useState, useEffect, useMemo } from "react";
import FilterTopics from "../Filter/FilterTopics";
import Pagination from "../Pagination/Pagination";
import PaginationDetermineTopicsPerPage from "../Pagination/PaginationDetermineTopicsPerPage";
import './style/DashboardPageStyle.scss'


const DashboardFuntionalBased = () => {

 const [content, setContent] = useState([]);
 const [filterStates, setFilterStates] = useState('new');
 const api = axios.create({baseURL: ''});
 const [currentPage, setCurrentPage] = useState(1);
 const [pageSize, setPageSize] = useState(6)

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return content.slice(firstPageIndex, lastPageIndex);
  }, [pageSize ,content, currentPage, filterStates]);
 
 
 const checkFilteringStates = (value) => {
  if (filterStates === 'dsc' ) {
    return value.sort((a, b) => -1 * a.topicContent.localeCompare(b.topicContent));
    
  }

  if (filterStates === 'asc') {
    return value;
  }

  if (filterStates === 'new') {
    return value.sort(function(a,b){return new Date(b.timeOfLastMessage) - new Date(a.timeOfLastMessage);});;
  }
  
};


 useEffect(() => {
  UserService.getUserBoard("/dashboard/get").then(
    response => {
      setContent(checkFilteringStates(response.data))
    },
    error => {setContent(error)}
  );
 }, [filterStates, pageSize])
  



  return (
       <>
       <DashboardCreateTopicModal />
       <FilterTopics setFilterStates={setFilterStates}/>
       <DashboardCard data={currentTableData} />
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

export default DashboardFuntionalBased;