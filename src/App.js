import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import customPlugin from './custom-plugin';

export default function App() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef);
      console.log(editorRef.current.getContent());
    }
  };
  if (window && window.tinymce) {
    const { tinymce } = window;
    tinymce.PluginManager.add('example', (editor, url) => {

      console.log("True")
    });
  }

  return (
    <>
      <Editor
        apiKey='api-key'
        onInit={(evt, editor) => {
          editorRef.current = editor;
        }}
        initialValue="<p class='test'>This is the initial content of the editor.</p>"
        init={{
          contextmenu: 'testexample',
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount','example'
          ],
          height: 500,
          menubar: false,
          setup:editor => {
          customPlugin(editor); // I'm importing this plugin from a js file
          },
          

          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help | example',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}