import usePlatforms from "../hooks/usePlatforms.ts";


function platforms() {
    const {data} = usePlatforms();


    return (
        {data.map()}
    );
}