import { useState, useEffect } from 'react';
import Editor from './Editor';
import "./Style.css"

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`
        <html>
        <body> ${html} </body>
        <style> ${css} </style>
        <script> ${js} </script>
        </html>
        `)
    }, 250)
    return () => clearTimeout(timeOut)
  }, [html, css, js])

  return (
    <>
      
      <div style={{ display: "flex", height:"50vh" }} classname="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml} />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss} />
        <Editor
          language="JAVASCRIPT"
          displayName="JAVASCRIPT"
          value={js}
          onChange={setJs} />
      </div>

      <div style={{ height: "50vh" }} classname="pane">
        <iframe
          srcDoc={srcDoc}
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
