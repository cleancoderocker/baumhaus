# baum

A simple package for parsing different file formats to an abstract syntax tree based on the MIME type detected. 

```javascript
const filePath = path.join(__dirname, 'input', 'styles.css');
const result = await baum.parse(filePath);
```

Currently supports:

* JavaScript (using `esprima`)
* CSS (using `postcss`)
* XML (using `xml2js`)
* Markdown (using `marked`)
* JSON (using native `JSON.parse()`)
