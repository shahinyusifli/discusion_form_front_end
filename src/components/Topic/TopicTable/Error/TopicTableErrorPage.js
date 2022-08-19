import TopicTableErrorList from "./TopicTableErrorList";

const TopicTabelErrorPage = ({iserror, errorMessages}) => {
          return (
                    <div>
                              <TopicTableErrorList iserror={iserror} errorMessages={errorMessages} />
                    </div>
          )
}

export default TopicTabelErrorPage;