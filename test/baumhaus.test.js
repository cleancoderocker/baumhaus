const baumhaus = require('..');
const path = require('path');

describe('baumhaus', () => {
  it('should parse markdown files', async () => {
    const filePath = path.join(__dirname, 'input', 'markdown.md');
	const result = await baumhaus.parse(filePath);
    expect(result.ast[0].type).toBe('heading');
  });
  it('should parse css files', async () => {
    const filePath = path.join(__dirname, 'input', 'styles.css');
    const result = await baumhaus.parse(filePath);
    expect(result.ast.raws).toBeDefined();
  });
  it('should parse javascript files', async () => {
    const filePath = path.join(__dirname, 'input', 'scripts.js');
    const result = await baumhaus.parse(filePath);
    expect(result.ast.type).toBe('Program');
  });
  it('should parse xml files', async () => {
    const filePath = path.join(__dirname, 'input', 'document.xml');
    const result = await baumhaus.parse(filePath);
    expect(result.ast.person).toBeDefined();
  });
  it('should parse json files', async () => {
    const filePath = path.join(__dirname, 'input', 'document.json');
    const result = await baumhaus.parse(filePath);
    expect(result.ast.firstName).toBe('John');
  });
  it('should parse markdown content', async () => {
    const input = `# Headline

	## Subheadline
	
	* Listitem
	* Listitem
	* Listitem
	* Listitem
	* Listitem
	`;
    const result = await baumhaus.parse(input, 'text/markdown');
    expect(result.ast[0].type).toBe('heading');
  });
  it('should parse css content', async () => {
    const input = `body {
		color: orange;
	}`;
    const result = await baumhaus.parse(input, 'text/css');
    expect(result.ast.raws).toBeDefined();
  });
  it('should parse javascript content', async () => {
    const input = `function example() {
		console.log("tests");
	  }
	`;
    const result = await baumhaus.parse(input, 'application/javascript');
    expect(result.ast.type).toBe('Program');
  });
  it('should parse xml content', async () => {
    const input = `<person>
		<firstName>John</firstName>
		<lastName>Doe</lastName>
	</person>
	`;
    const result = await baumhaus.parse(input, 'application/xml');
    expect(result.ast.person).toBeDefined();
  });
  it('should parse json content', async () => {
    const input = `{
		"firstName": "John",
		"lastName": "Doe"
	  }
	`;
    const result = await baumhaus.parse(input, 'application/json');
    expect(result.ast.firstName).toBe('John');
  });
});
