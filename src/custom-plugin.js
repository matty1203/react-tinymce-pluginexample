
export default function customPlugin(editor) {
    editor.editorManager.PluginManager.add('example', (editor) => {
        editor.ui.registry.addButton('example', {
          icon: 'italics',
          tooltip: 'Format Painter',
          onAction: () => {
            editor.selection.setContent('<b>BOLD</b>')
          }
        });

        editor.ui.registry.addMenuItem('testexample', {
            icon: 'image',
            text: 'Text',
            onAction: () => {
              console.log('context menu clicked');
              alert('context menu clicked');
            }
          });
        
          editor.ui.registry.addContextMenu('testexample', {
            update: (element) =>  {
                console.log(element.className)
                return 'testexample'}
          });
      });

}