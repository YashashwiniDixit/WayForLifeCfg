import React from 'react';
import { Line } from 'react-chartjs-2';

const state = {
	labels: [ 'January', 'February', 'March', 'April', 'May' ],
	datasets: [
		{
			label: 'Schools',
			fill: false,
			lineTension: 0.5,
			backgroundColor: 'rgba(75,192,192,1)',
			borderColor: 'rgba(0,0,0,1)',
			borderWidth: 2,
			data: [ 6, 9, 2, 7, 8 ]
		}
	]
};

export default class LineGraph extends React.Component {
	render() {
		return (
			<div>
				<Line
					data={state}
					options={{
						title: {
							display: true,
							text: 'Average School Collaboration per month',
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
