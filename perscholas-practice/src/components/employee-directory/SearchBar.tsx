type HomePageProps = {
    input: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const SearchBar = ({input, handleChange}: HomePageProps) => {
    
  return (
    <div className="mx-auto">
        <input onChange={handleChange} value={input} className="border border-gray-200 rounded-md w-72 my-1" type="text"/>
    </div>
  )
}

export default SearchBar