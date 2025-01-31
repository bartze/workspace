import './App.css';
import PropTypes from 'prop-types';

const ListItem = ({ value }) => {
	return <li>{value}</li>;
};

ListItem.propTypes = {
	value: PropTypes.string.isRequired,
};

function StudentList() {
	const students = [
		{
			dni: '11111111A',
			name: 'John Doe',
			date_of_birth: '01/01/1990',
		},
		{
			dni: '22222222B',
			name: 'Maria Benegas',
			date_of_birth: '02/02/1991',
		},
	];
	const listStudents = students.map((student) => {
		return <ListItem key={student.dni} value={student.name} />;
	});

	return <div className="App">{listStudents}</div>;
}
export default StudentList;
