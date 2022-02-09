import React from "react";
import Form from "./components/Form.jsx";
import Pokemon from "./components/Pokemon.jsx";

function App() {
	const [pokemonName, setPokemonName] = React.useState(null);
	console.log(pokemonName);
	return (
		<div>
			<Form pokemonName={pokemonName} setPokemonName={setPokemonName} />
			<Pokemon name={pokemonName} />
		</div>
	);
}

export default App;
