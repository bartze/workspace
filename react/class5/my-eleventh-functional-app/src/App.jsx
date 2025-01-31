import StudentList from './components/StudentList';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Eleventh Functional App</h1>
      <section>
        <h2>Student List</h2>
        <StudentList />
      </section>
      <section>
        <h2>Form</h2>
        <Form />
      </section>
    </div>
  );
}

export default App;

