import { IoMdSearch } from "react-icons/io";

const SearchBar = ({ setSearchValue }) => {
    const handleSearch = (e) => {
        e.preventDefault();
        const value = e.target.search.value;
        setSearchValue(value);
    }
    return (
        <div>
            <form action="" onSubmit={handleSearch} className="bg-white p-1 rounded-lg flex border border-primary">
                <input type="text" name="search" className="w-64 rounded-lg bg-transparent px-4 py-1 text-black focus:outline-none " placeholder="Search"/>
                <button type="submit" className="p-2 rounded-lg bg-primary text-xl text-white lg:ml-2 my-auto"><IoMdSearch /></button>
            </form>
        </div>
    );
};

export default SearchBar;