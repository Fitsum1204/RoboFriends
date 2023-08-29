import React from 'react';
import 'tachyons';

const SearchBox = ({searchfield ,searChange}) => {

	return (
		<div ClassName='pa2' >
		<input 
		ClassName ='pa3 ba b--green bg-lightest-blue'
		type ="search" 
		placeholder='search robots'
		onChange={searChange}
		/>
		</div>
		)
}

export default SearchBox;