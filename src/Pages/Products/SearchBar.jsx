
const SearchBar = ({setSearchValue}) => {
    const handleSearch = (e) => {
        e.preventDefault();
        const value = e.target.search.value;
        setSearchValue(value);
    }
    return (
        <div>
            <form action="" onSubmit={handleSearch}>
                <input type="text" name="search" className="rounded-lg border border-black bg-transparent px-4 py-2 text-black ring-offset-1 duration-200 focus:outline-none focus:ring-2" placeholder="Search Service" />
                <button type="submit" className="px-4 py-2 rounded-full bg-sky-950 text-white lg:ml-2">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;