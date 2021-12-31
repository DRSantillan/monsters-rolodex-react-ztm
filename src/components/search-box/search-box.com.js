import React from 'react';

const SearchBox = (props) => {
    return (
		<input
			onChange={props.searchfield}
			type='search'
			placeholder='Search monsters...'
		/>
	);
}

export default SearchBox;