import useDashboardDataFiltiring from "./useDashboardDataFiltiring";
import DashboardPageFilterLogic from "../../Filter/DashboardPageFilterLogic";

const useFiltiredData = ({filterStates, pageSize}) => {
          const content = useDashboardDataFiltiring({filterStates, pageSize})
          const filtiredContent = DashboardPageFilterLogic({data:content, filterStates})
          return filtiredContent
}

export default useFiltiredData;