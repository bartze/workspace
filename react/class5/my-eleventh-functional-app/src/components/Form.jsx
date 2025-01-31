import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    input: '',
    textArea: 'Hola Mando, aqui hay algo de texto en la caja de texto',
    select: 'coconut',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Input: ${formData.input}\nTextArea: ${formData.textArea}\nSelect: ${formData.select}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        No editable:
        <input type="text" value="hola" readOnly />
      </label>
      <hr/>
      <label>
        Editable:
        <input 
          type="text" 
          name="input"
          value={formData.input} 
          onChange={handleChange} 
        />
      </label>
      <hr/>
      <label>
        Text area:
        <textarea 
          value={formData.textArea}
          name="textArea"
          onChange={handleChange}
        />
      </label>
      <hr/>
      <label>
        Select:
        <select 
          value={formData.select}
          name="select"
          onChange={handleChange}
        >
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default Form;
