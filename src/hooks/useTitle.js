import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Kids Day`
    }, [title])
}

export default useTitle;