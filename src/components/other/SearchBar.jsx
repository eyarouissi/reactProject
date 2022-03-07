


const SearchComponent = ({ searchQuery, setSearchQuery }) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => {
                setSearchQuery(e.target.value)
                const currValue = e.target.value
                dataSource = data.filter(entry =>entry.project_name.includes(currValue))
                
               }}
            className=" border-2 border-blue-900 mt-2.5 mx-8 rounded-lg"
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s"
        />
        
    </form>
);

export default SearchComponent