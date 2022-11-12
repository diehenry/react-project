import React, { useState, useEffect, useRef } from 'react';

const TrySome = () => {
	// const [word1, setWord1] = useState('請輸入..');
	// const word1OnChange = (e) => {
	// 	setWord1(e.target.value);
	// };

	const [selected, setSelected] = useState('BBB');
	const selectedOnChange = (e) => {
		setSelected(e.target.value);
	};

	const [input, setInput] = useState({});
	const inputOnChange = (e) => {
		const { name, value } = e.target;
		setInput({ [name]: value });
	};
	const inputClear = () => {
		setInput({ word1: '' });
	};

	const word2 = useRef();

	return (
		<>
			<input
				type="text"
				name="word1"
				value={input.word1}
				onChange={inputOnChange}
				disabled={false}
			/>
			<p>目前的Input值為:{input.word1} </p>
			<button onClick={inputClear}>清空</button>
			<br />
			<input type="text" name="word2" ref={word2} />
			<button
				onClick={() => {
					console.log(`${word2.current.name} is ${word2.current.value}`);
				}}
			>
				按鈕
			</button>
			<br />
			<select value={selected} onChange={selectedOnChange}>
				<option value="AAA">AAA</option>
				<option value="BBB">BBB</option>
				<option value="CCC">CCC</option>
			</select>
			<p>目前的Select值為:{selected} </p>
		</>
	);
};

export default TrySome;
