import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "./Style.css"
// import {UnControlled as CodeMirror} from 'react-codemirror2'
// import {Controlled as CodeMirror} from 'react-codemirror2'

const Editor = (props) => {
    const {language,displayName,value,onChange} = props;
    function handleChange(editor, data, value){
       onChange(value);
    }

    var editors = document.getElementsByClassName('code-mirror-wrapper');
    for (let i = 1; i < editors.length; i++) {
        editors[i].remove()
    }

  return (
    <>

          <div className="editor-container"> 

              <div className="editor-title">
                  {displayName}
                  <button>O/C</button>
              </div>

              <ControlledEditor
                  onBeforeChange={handleChange}
                  value={value}
                   className="code-mirror-wrapper"
                 // className="CodeMirror"
                  options={{
                      lineWrapping: true,
                      lint: true,
                      mode: language,
                      theme: 'material',
                      lineNumbers: true,
                  }}
              />
              <ControlledEditor />
          </div>
    </>
  )
}

export default Editor

