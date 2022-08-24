import useFiltiredData from "./useFiltiredData";
import useMemoHook from "../../Pagination/useMemo";

const usePaginatedData = ({filterStates, pageSize, currentPage}) => {
          const filtiredContent = useFiltiredData({filterStates:filterStates, pageSize:pageSize})
          const paginatedData = useMemoHook({currentPage:currentPage, content:filtiredContent, pageSize:pageSize})

          return paginatedData;
}

export default usePaginatedData;