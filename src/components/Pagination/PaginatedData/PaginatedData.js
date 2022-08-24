import useMemo from "../useMemo";

const paginatedData = ({currentPage, content, pageSize}) => {
          const paginatedData = useMemo({currentPage, content, pageSize})
          return paginatedData
}

export default paginatedData;