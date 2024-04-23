import axios from "axios";
import {useQuery} from "@tanstack/react-query";


function usePlatforms() {

    const getPlatforms = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.data)
    }

    return useQuery({
        queryKey: ['platforms'],
        queryFn: getPlatforms
    });
}

export default usePlatforms;