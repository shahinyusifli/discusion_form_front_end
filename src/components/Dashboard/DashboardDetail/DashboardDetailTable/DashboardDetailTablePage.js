import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import React, { useEffect } from 'react';
import DetailTableRowsItemPage from './TabelRow/DetailTableRowsItemPage';
import DashboardTableHeaderItem from './DetailTabelHeaderItem';
import DetailTableColumnItem from './DetailTabelColumnItem';

const DashboardDetailTablePage = ({messages}) => {

          return (
                    <>
                    <DashboardTableHeaderItem />
                              <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <DetailTableColumnItem />
                                        <DetailTableRowsItemPage messages={messages}/>
                                        </Table>
                              </TableContainer>
                    </>
          );
}

export default DashboardDetailTablePage;