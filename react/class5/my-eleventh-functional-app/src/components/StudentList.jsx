import PropTypes from 'prop-types';

const ListItem = ({ value }) => <li>{value}</li>;

ListItem.propTypes = {
    value: PropTypes.string.isRequired,
};

function StudentList() {
  const students = [
    { dni: '11111111A', name: 'John Doe', date_of_birth: '01/01/1990' },
    { dni: '22222222B', name: 'Maria Benegas', date_of_birth: '02/02/1991' },
  ];

  return (
    <ul>
      {students.map((student) => (
        <ListItem key={student.dni} value={student.name} />
      ))}
    </ul>
  );
}

export default StudentList;
