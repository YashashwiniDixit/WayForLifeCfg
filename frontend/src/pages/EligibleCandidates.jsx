import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Generate Order Data
function createData(id, name, interests, perferences) {
	return { id, name };
}

const rows = [
	createData(0, 'Rachel', 'Reading', 'Making Content'),
	createData(1, 'Rachel', 'Science', 'Making Content'),
	createData(2, 'Rachel', 'Reading', 'Making Content'),
	createData(3, 'Rachel', 'Reading', 'Making Content'),
	createData(4, 'Rachel', 'Reading', 'Making Content')
];

const useStyles = makeStyles((theme) => ({
	seeMore: {
		marginTop: theme.spacing(3)
	}
}));

export default function EligibleCandidates() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.name}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className={classes.seeMore} />
		</React.Fragment>
	);
}
