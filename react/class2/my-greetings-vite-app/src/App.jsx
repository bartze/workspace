import React from 'react';
import Welcome from './Welcome';

function App() {
  const students = [
    { name: 'María', course: 'React Avanzado' },
    { name: 'Carlos', course: 'Desarrollo Web' },
    { name: 'Laura', course: 'JavaScript Moderno' },
  ];

  return (
    <div className="App">
      {students.map((student, index) => (
        <Welcome key={index} name={student.name} course={student.course} />
      ))}
    </div>
  );
}

export default App;


