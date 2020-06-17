import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const forms = [
  'Hey',
  'How are you?',
  'Who are you?',
  'What are you?',
  'Does this matter?',
  'Do you pass?',
]

function App() {
  const [curForm, setCurForm] = useState(0);
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      {curForm < forms.length ? 
        <div className="form">
          <h3>{forms[curForm]}</h3>
          <div>
            <input type="radio" id="yes" checked={checked} onChange={() => setChecked(true)} />
            <label for="yes">Yes{curForm === 0 ? '?' : ''}</label>
          </div>
          <button 
            disabled={!checked}
            onClick={() => {
              setCurForm((i) => i+1);
              setChecked(false);
            }}
          >
              {curForm < forms.length - 1 ? 'Next' : 'Complete'}
          </button>
        </div>
      : <h3 className="complete">Thank You for Completing the Form</h3>}
    </div>
  );
}

export default App;
