import React from "react";
import Form from "./components/Form.jsx";
import Pokemon from "./components/Pokemon.jsx";
import Enemy from "./components/Enemy.jsx";
import Move from "./components/Move.jsx";

function App() {
	const [pokemonName, setPokemonName] = React.useState(null);
	const [num, setNum] = React.useState(null);
	const [playerX, setPlayerX] = React.useState(0);
	const [playerY, setPlayerY] = React.useState(0);
	// const [translate, setTranslate] = React.useState("translate(-50%, -50%)");
	const [enemyLeftX, setEnemyLeftX] = React.useState(0);
	const [enemyLeftY, setEnemyLeftY] = React.useState(60);
	const [enemyRightX, setEnemyRightX] = React.useState(80);
	const [enemyRightY, setEnemyRightY] = React.useState(40);
	const [collision, setCollision] = React.useState(false);

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
				enemyLeftX={enemyLeftX}
				enemyLeftY={enemyLeftY}
				setEnemyLeftX={setEnemyLeftX}
				setEnemyLeftY={setEnemyLeftY}
			/>
			<Enemy
				num={num}
				enemyRightX={enemyRightX}
				enemyRightY={enemyRightY}
				setEnemyRightX={setEnemyRightX}
				setEnemyRightY={setEnemyRightY}
			/>
			<Pokemon
				name={pokemonName}
				// translate={translate}
				// setTranslate={setTranslate}
				playerX={playerX}
				playerY={playerY}
			/>
			<Move
				playerX={playerX}
				setPlayerX={setPlayerX}
				playerY={playerY}
				setPlayerY={setPlayerY}
				enemyLeftX={enemyLeftX}
				enemyLeftY={enemyLeftY}
				setEnemyLeftX={setEnemyLeftX}
				setEnemyLeftY={setEnemyLeftY}
				enemyRightX={enemyRightX}
				enemyRightY={enemyRightY}
				setEnemyRightX={setEnemyRightX}
				setEnemyRightY={setEnemyRightY}
				collision={collision}
				setCollision={setCollision}
			/>
		</div>
	);
}

export default App;
