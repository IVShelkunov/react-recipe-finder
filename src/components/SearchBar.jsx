//SearchBar.jsx
import { useState } from 'react';
function SearchBar ({onSearch}) {
	//State
	const [inputValue , setInputValue] = useState('');
	//Handlers
	const handleInputChange = (event) => setInputValue(event.target.value); 
	const handleSubmit = (event) => {
		event.preventDefault();
		if(!inputValue.trim()) return;
		onSearch(inputValue);
		setInputValue('');
	}
	return (
		<form className="search-bar" onSubmit={handleSubmit}>
			<input type="text" placeholder="Enter the name of the dish" value={inputValue} onChange={handleInputChange}/>
			<button type="submit" disabled={inputValue===''}>Search</button>
		</form>
	);
}
export default SearchBar;