import authGetUserName from "../../../services/User/get-user-name";
import authGetUserRole from "../../../services/User/get-user-role";

const TopicTableHeader = () => {

          const name = authGetUserName();
          const role = authGetUserRole();
          
          return (
                    <div>
                              <h1>Welcome {name}</h1>
                              <h2>Your status is {role}</h2>
                    </div>
          )
}
export default TopicTableHeader;