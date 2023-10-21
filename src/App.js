import { useState } from 'react';
import Editor from './components/Editor';

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  return (
    <>

      <div classname="top-pane">

        <Editor 
        language="Xml" 
        displayName="HTML"
        value={html}
        onChange={setHtml} />

         <Editor 
        language="css" 
        displayName="CSS"
        value={css}
        onChange={setCss} />

         <Editor 
        language="js" 
        displayName="JAVASCRIPT"
        value={js}
        onChange={setJs} />

      </div>

      <div classname="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"

        />
      </div>


    </>
  );
}

export default App;
