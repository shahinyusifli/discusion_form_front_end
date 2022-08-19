import Alert from '@material-ui/lab/Alert';
import TopicTabelErrorItem from './TopicTabelErrorItem';

const TopicTableErrorList = ({iserror, errorMessages}) => {

          return (
                    <>
                     {iserror &&
                <Alert severity="error">
                  {errorMessages.map((msg, i) => {
                    <TopicTabelErrorItem i={i} msg={msg} />
                  })}
                </Alert>
              }
                    </>
          )
}

export default TopicTableErrorList;