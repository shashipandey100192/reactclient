import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo,Underline, Superscript,Strikethrough } from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

function Mytexteditors() {
  return (
    <CKEditor
            editor={ ClassicEditor }
            config={ {
                toolbar: {
                    items: [ 'undo', 'redo', '|', 'bold', 'italic','underline','strikethrough','subscript','superscript' ],
                },
                plugins: [
                    Bold, Essentials, Italic, Mention, Paragraph, Undo, Underline, Superscript,Strikethrough
                ],
                
                mention: {
                    // Mention configuration
                },
                initialData: '<p>Hello from CKEditor 5 in React!</p>',
            } }
        />
  )
}

export default Mytexteditors