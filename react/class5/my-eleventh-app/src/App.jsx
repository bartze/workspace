import './App.css'
import StudentList from './StudentList';
import Form from './Form';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>My Eleventh App</h1>
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
}

export default App
