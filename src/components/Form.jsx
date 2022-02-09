import React from "react";
// import Enemy from "./Enemy";

// form with:
// username input
// pokemon input (to type pokemon name) - track state of pokemon name
// button to generate random pokemon

// eslint-disable-next-line no-unused-vars
function Form({ pokemonName, setPokemonName, setNum }) {
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				const userInput = event.target.pokemonName.value;
				setPokemonName(userInput.toLowerCase());
				setNum(Math.floor(Math.random() * 100))
				// hide the form and reveal game
				event.target.classList.add("hide");
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
