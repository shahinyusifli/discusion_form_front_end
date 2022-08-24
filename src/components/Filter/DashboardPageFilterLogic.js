

const DashboardPageFilterLogic = ({data, filterStates}) => {
          
                    if (filterStates === 'dsc' ) {
                      return data.sort((a, b) => -1 * a.topicContent.localeCompare(b.topicContent));
                    }
                  
                    if (filterStates === 'asc') {
                      return data.sort((a, b) => a.topicContent.localeCompare(b.topicContent));
                    }
                  
                    if (filterStates === 'new') {
                      return data.sort(function(a,b){return new Date(b.timeOfLastMessage) - new Date(a.timeOfLastMessage);});;
                    }
}

export default DashboardPageFilterLogic;