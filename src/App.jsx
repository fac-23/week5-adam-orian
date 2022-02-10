import React from "react";
import Form from "./components/Form.jsx";
import Pokemon from "./components/Pokemon.jsx";
import Enemy from "./components/Enemy.jsx";
import Move from "./components/Move.jsx";

function App() {
	const [pokemonName, setPokemonName] = React.useState(null);
	const [num, setNum] = React.useState(null);
	const [playerX, setPlayerX] = React.useState(50);
	const [playerY, setPlayerY] = React.useState(0);
	const [translate, setTranslate] = React.useState("translate(-50%, -50%)");
	const [enemyX, setEnemyX] = React.useState(50);
	const [enemyY, setEnemyY] = React.useState(0);

	// console.log(pokemonName);

	return (
		<div>
			<Form
				pokemonName={pokemonName}
				setPokemonName={setPokemonName}
				setNum={setNum}
			/>
			<Enemy
				num={num}
				enemyX={enemyX}
				enemyY={enemyY}
				setEnemyX={setEnemyX}
				setEnemyY={setEnemyY}
			/>
			<Pokemon
				name={pokemonName}
				translate={translate}
				setTranslate={setTranslate}
				playerX={playerX}
				playerY={playerY}
			/>
			<Move
				playerX={playerX}
				setPlayerX={setPlayerX}
				playerY={playerY}
				setPlayerY={setPlayerY}
				enemyX={enemyX}
				enemyY={enemyY}
				setEnemyX={setEnemyX}
				setEnemyY={setEnemyY}
			/>
		</div>
	);
}

export default App;
