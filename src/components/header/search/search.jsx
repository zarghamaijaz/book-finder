import './search.css';
export default function Search({setPageNumber,setQuery,query}){
    function handleSearch(e){
        setQuery(e.target.value);
        setPageNumber(1);
    }
    return(
        <div className="p-1">
            <input value={query} onChange={handleSearch} className="search-style" type="text" placeholder="Search for books"/>
        </div>
    )
}