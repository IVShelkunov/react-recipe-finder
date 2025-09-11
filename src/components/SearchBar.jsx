import { useState } from 'react';
function SearchBar () {
	//State
	const [inputValue , setInputValue] = useState('');
	//Handlers
	const handleInputChange = (event) => setInputValue(event.target.value);
	return (
		<form>
			<input type="text" placeholder="Enter the name of the dish" value={inputValue} onChange={handleInputChange}/>
			<button type="submit" disabled={inputValue===''}>Search</button>
		</form>
	);
}
export default SearchBar;