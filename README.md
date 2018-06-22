# baum

A simple package for parsing different file formats to an abstract syntax tree based on the MIME type detected. 

## Installation

`npm install baum`

## Usage

```javascript
const baum = require('baum');
const path = require('path');
const filePath = path.join(__dirname, 'input', 'styles.css');

(async () => {
  const ast = await baum.parse(filePath);
  console.log(ast);
})();
```

## Supported formats

* JavaScript (using `esprima`)
* CSS (using `postcss`)
* XML (using `xml2js`)
* Markdown (using `marked`)
* JSON (using native `JSON.parse()`)
