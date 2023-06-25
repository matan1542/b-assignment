export default function syntaxHighlight(json) {
  // Initialize line number counter and result string
  let result = '';

  // Loop through each line of the JSON string
  json.split('\n').forEach((line, idx) => {
    // Create a span element for the line number
    const lineNumberSpan = `<span class="line-number">${idx + 1}</span>`;

    //  Parse the line and add the line number span to the key
    const parsedLine = line
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?)/g, (match) => {
        let cls = 'number';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'key';
          } else {
            cls = 'string';
          }
        } else if (/true|false/.test(match)) {
          cls = 'boolean';
        } else if (/null/.test(match)) {
          cls = 'null';
        }
        return `<span class="${cls}">${match}</span>`;
      });

    //  Add the parsed line to the result string and increment the line number counter
    result += `${lineNumberSpan} ${parsedLine}\n`;
  });

  return <pre dangerouslySetInnerHTML={{ __html: result }} />;
}
