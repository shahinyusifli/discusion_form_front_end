import React, { useEffect } from 'react';
import DashboardDetailTablePage from './DashboardDetailTable/DashboardDetailTablePage';
import useDashboardDetailData from './useDashboardDetailData';


const DashboardDetailPage = () => {

    const messages = useDashboardDetailData()

    return (
        <>
           <DashboardDetailTablePage messages={messages}/>
        </>

    );
}

export default DashboardDetailPage;
