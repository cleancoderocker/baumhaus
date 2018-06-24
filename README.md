# baumhaus

A simple package for parsing different file formats to an abstract syntax tree based on the MIME type detected. 

## Installation

`npm install baumhaus`

## Usage

```javascript
const baumhaus = require('baumhaus');
const path = require('path');
const base = path.join(__dirname, 'input');
const css = path.join(base, 'styles.css');
const md = path.join(base, 'markdown.md');
const js = path.join(base, 'scripts.js');
const xml = path.join(base, 'document.xml');
const json = path.join(base, 'document.json');

(async () => {
  const astCSS = await baumhaus.parse(css);
  const astMD = await baumhaus.parse(md);
  const astJS = await baumhaus.parse(js);
  const astXML = await baumhaus.parse(xml);
  const astJSON = await baumhaus.parse(json);
})();
```

## Supported formats

* JavaScript (using `esprima`)
* CSS (using `postcss`)
* XML (using `xml2js`)
* Markdown (using `marked`)
* JSON (using native `JSON.parse()`)
