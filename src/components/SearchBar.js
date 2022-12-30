const SearchBar = () => {
  return (
    <div>
      <input style={StyleSearchBar} type='text' />
    </div>
  );
};

const StyleSearchBar = {
  width: "95%",
  border: "1px solid #333",
  borderRadius: "5px",
  padding: "7px 0px",
  margin: "2px 9px",
};

export default SearchBar;
