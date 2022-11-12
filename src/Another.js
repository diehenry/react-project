import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './Another.css';
const groupStyles = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
};
const groupBadgeStyles = {
	backgroundColor: '#EBECF0',
	borderRadius: '2em',
	color: '#172B4D',
	display: 'inline-block',
	fontSize: 12,
	fontWeight: 'normal',
	lineHeight: '1',
	minWidth: 1,
	padding: '0.16666666666667em 0.5em',
	textAlign: 'center',
};

const formatGroupLabel = (data) => (
	<div style={groupStyles}>
		<span>{data.label}</span>
		<span style={groupBadgeStyles}>{data.options.length}</span>
	</div>
);

const Another = (props) => {
	const customStyles = {
		valueContainer: (provided, state) => ({
			...provided,
			textOverflow: 'ellipsis',
			maxWidth: '90%',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			display: 'initial',
		}),
	};

	const multiValueContainer = ({ selectProps, data }) => {
		console.log(`selectProps: ${JSON.stringify(selectProps, 4, null)}`);
		console.log(`data: ${JSON.stringify(data, 4, null)}`);
		const label = data.label;
		const allSelected = selectProps.value;
		const index = allSelected.findIndex((selected) => selected.label === label);
		const isLastSelected = index === allSelected.length - 1;
		const labelSuffix = isLastSelected ? ` (${allSelected.length})` : ', ';
		const val = `${label}${labelSuffix}`;
		return val;
	};

	const animated = makeAnimated();
	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' },
		{ value: 'ocean', label: 'Ocean' },
		{ value: 'blue', label: 'Blue' },
		{ value: 'purple', label: 'Purple' },
		{ value: 'red', label: 'Red' },
		{ value: 'orange', label: 'Orange' },
		{ value: 'yellow', label: 'Yellow' },
		{ value: 'green', label: 'Green' },
		{ value: 'forest', label: 'Forest' },
		{ value: 'slate', label: 'Slate' },
		{ value: 'silver', label: 'Silver' },
	];

	return (
		<>
			<Select
				isMulti
				options={options}
				formatGroupLabel={formatGroupLabel}
				components={{ MultiValueContainer: multiValueContainer }}
				styles={customStyles}
				isSearchable
				autoFocus
				placeholder="Select somethings"
				noOptionsMessage={() => 'no selected '}
				closeMenuOnSelect={false}
			/>

			<label htmlFor="browser">Choose your browser from the list:</label>
			<input list="browsers" name="browser" id="browser" />

			<datalist id="browsers">
				<option style={{ width: '100%' }} value="Edge" />
				<option value="Firefox" />
				<option value="Chrome" />
				<option value="Opera" />
				<option value="Safari" />
			</datalist>
		</>
	);
};

export default Another;
