import React from "react";

// form with:
// username input
// pokemon input (to type pokemon name) - track state of pokemon name
// button to generate random pokemon

// eslint-disable-next-line no-unused-vars
function Form({ pokemonName, setPokemonName }) {
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				setPokemonName(event.target.pokemonName.value);
				// hide the form and reveal game
			}}
		>
			<label htmlFor="username">
				Username
				<input type="text" id="username" name="username" />
			</label>
			<label htmlFor="pokemonName">
				Type a Pokemon name
				<input type="text" id="pokemonName" name="pokemonName" />
			</label>
			<button type="submit">Go!</button>
		</form>
	);
}

export default Form;