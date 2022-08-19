import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';

const DetailTableColumnItem = () => {

    return (
        <>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Messages</TableCell>
                    <TableCell align="right">Last modification date</TableCell>
                </TableRow>
            </TableHead>
        </>
    );
}

export default DetailTableColumnItem;
