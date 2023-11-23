import useQueryParam from '../hooks/useQueryParam'

const UseQueryParamComponent = () => {
    const [searchTerm, setSearchTerm] = useQueryParam('search', '');

    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    return (
      <div>
        <input type="text" value={searchTerm} onChange={handleSearchChange} />
        <p>Recherche pour : {searchTerm}</p>
      </div>
    );
}

export default UseQueryParamComponent;
