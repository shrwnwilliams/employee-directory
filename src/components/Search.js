function Search({ filterResults }) {
  return (
    <div>
      <form>
        <input type="text" placeholder="Search" aria-label="Search" onChange={e => filterResults(e)} />
      </form>
    </div>
  );
}

export default Search;
