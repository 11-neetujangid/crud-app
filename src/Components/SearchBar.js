import { useSelector } from "react-redux";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const SearchBar = () => {

    const Search = useSelector((state) => state.users);
    console.log(Search);

    const handleOnSearch = (string, results) => {
        console.log(string);
        console.log(results);

        if (results == '') {
            console.log("result not found");
        }
        else{
            console.log(string, results);
        }
    }
    const handleOnSelect = (item) => {
        console.log(item)
    }
   
    return (
        <div >

            <div style={{ width: 400 }}>
                <ReactSearchAutocomplete
                    placeholder="Search..."
                    items={Search}
                    onSearch={handleOnSearch}
                    onSelect={handleOnSelect}
                />
            </div>

        </div>
    )
}
export default SearchBar;
