import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUsers } from '../Service/api'
import { useDispatch } from "react-redux"


const SearchBar = () => {

    const dispatch = useDispatch();
    const [searchuser, setSearchUser] = useState('');
    const [filterrData, setfilterData] = useState([]);

    const Search = useSelector((state) => state.users);
    useEffect(() => {
        console.log("data")
        dispatch(getUsers());

    }, [])

    useEffect(() => {
        console.log("filter")
        setfilterData(Search.filter((user) => user.name.toLowerCase().includes(searchuser.toLowerCase())));
        console.log("sbbbbb")
    }, [searchuser])
    return (
        <div>
            <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
                <i class="fas fa-search" aria-hidden="true"></i>
                <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search..."
                    aria-label="Search" onChange={(e) => { setSearchUser(e.target.value) }} />
            </form>
            {/* <input type="search" placeholder="Serach..." onChange={(e) => { setSearchUser(e.target.value) }} /> */}

            { filterrData.length === 0 ?
                <div>No Record Found </div> :
                filterrData.map((val) => {
                    return <div key={val.id}>
                        <p>{val.name}</p>
                    </div>
                })}
        </div>
    )

}
export default SearchBar;


