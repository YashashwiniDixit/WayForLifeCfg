import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';

const state = {
	labels: [ 'January', 'February', 'March', 'April', 'May', 'June' ],
	datasets: [
		{
			label: 'Events',
			backgroundColor: [
				'#ef476f',
				'#ffd166',
				'#06d6a0',
				'#118ab2',
				'#073b4c',
				'#ee9b00'
			],
			hoverBackgroundColor: [
				'#501800',
				'#4B5000',
				'#175000',
				'#003350',
				'#35014F',
				'#ee9b00'
			],
			data: [ 5, 9, 8, 5, 8, 10 ]
		}
	]
};

export default class PieChart extends React.Component {
	render() {
		return (
			<div>
				<Pie
					data={state}
					options={{
						title: {
							display: true,
							text: 'Average Events per month',
							fontSize: 20
						},
						legend: {
							display: true,
							position: 'right'
						}
					}}
				/>

				<Doughnut
					data={state}
					options={{
						title: {
							display: true,
							text: 'Average Events per month',
							fontSize: 20
						},
						legend: {
							display: true,
							position: 'right'
						}
					}}
				/>
			</div>
		);
	}
}
