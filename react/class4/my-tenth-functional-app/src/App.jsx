import LoginControl from './components/LoginControl';
import NameForm from './components/NameForm';
import FileInput from './components/FileInput';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoginControl />
      <h2>Name Form (Uncontrolled Component)</h2>
      <NameForm />
      <h2>File Input (Uncontrolled Component)</h2>
      <FileInput />
    </div>
  );
}

export default App;

