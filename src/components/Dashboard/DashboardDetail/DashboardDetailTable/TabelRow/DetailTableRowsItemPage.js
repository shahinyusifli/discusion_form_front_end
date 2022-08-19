import TableBody from '@mui/material/TableBody';
import React from 'react';
import DashboardDetailTableRowList from './DashboardDetailTableRowList';

const DetailTableRowsItemPage = ({messages}) => {

    return (
        <>
                    <TableBody>
                    <DashboardDetailTableRowList messages={messages} />
                    </TableBody>
        </>
    );
}

export default DetailTableRowsItemPage;
