import { useMemo } from "react"

const useMemoHook = ({currentPage, content, pageSize}) => {
          const paginatedData = useMemo(() => {
                    const firstPageIndex = (currentPage - 1) * pageSize;
                    const lastPageIndex = firstPageIndex + pageSize;
                    return content.slice(firstPageIndex, lastPageIndex);
                  }, [pageSize, content, currentPage]);
          
          return  paginatedData;
}

export default useMemoHook;