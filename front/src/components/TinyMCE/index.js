import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TinyMCE(props) {
  return (
    <Editor 
    { ...props }
    apiKey=""
    init={{
      plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen link template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount  textpattern noneditable help charmap quickbars emoticons',
      menubar: false,
      toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | ltr rtl',
      toolbar_sticky: true,
      autosave_ask_before_unload: true,
      autosave_interval: "30s",
      autosave_prefix: "{path}{query}-{id}-",
      autosave_restore_when_empty: false,
      autosave_retention: "2m",
      content_css: '//www.tiny.cloud/css/codepen.min.css',
      importcss_append: true,
      height: 490,
      quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quicktable',
      toolbar_mode: 'sliding',
     }}
  />
  );
}
