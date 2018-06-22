const mt = require('mime-types');
const fs = require('fs-extra');
const marked = require('marked');
const postcss = require('postcss');
const esprima = require('esprima');
const xml2js = require('xml2js');

const parseMarkdown = async input => {
  return marked.lexer(input);
};

const parseCSS = async input => {
  return postcss.parse(input);
};

const parseJavaScript = async input => {
  return esprima.parse(input);
};

const parseXML = async input => {
  return new Promise((resolve, reject) => {
    xml2js.parseString(input, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const parseJSON = async input => {
  return JSON.parse(input);
};

const parserMap = new Map();
parserMap.set('text/markdown', parseMarkdown);
parserMap.set('text/css', parseCSS);
parserMap.set('application/javascript', parseJavaScript);
parserMap.set('application/xml', parseXML);
parserMap.set('application/json', parseJSON);

module.exports = {
  async parse(path) {
    const mimeType = mt.lookup(path);
    const parserFunction = parserMap.get(mimeType);
    if (parserFunction) {
      const fileContent = fs.readFileSync(path).toString();
      return parserFunction(fileContent);
    }
  }
};
