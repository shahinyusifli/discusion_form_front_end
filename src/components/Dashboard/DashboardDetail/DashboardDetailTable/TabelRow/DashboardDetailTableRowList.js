import React from 'react';
import DetailTableRowsItem from './DetailTabelRowsItem';

const DashboardDetailTableRowList = ({messages}) => {

    return (
        <>
                        {messages.map((row) => (
                            <DetailTableRowsItem 
                            messageId = {row.messageId}
                            messageContent = {row.messageContent}
                            timeOfLastMessage = {row.timeOfLastMessage} />
                        ))}
        </>
    );
}

export default DashboardDetailTableRowList;
