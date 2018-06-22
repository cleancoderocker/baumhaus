const baum = require('..');
const path = require('path');

describe('baum', () => {
  it('should parse markdown', async () => {
    const filePath = path.join(__dirname, 'input', 'markdown.md');
    const result = await baum.parse(filePath);
    expect(result[0].type).toBe('heading');
  });
  it('should parse css', async () => {
    const filePath = path.join(__dirname, 'input', 'styles.css');
    const result = await baum.parse(filePath);
    expect(result.raws).toBeDefined();
  });
  it('should parse javascript', async () => {
    const filePath = path.join(__dirname, 'input', 'scripts.js');
    const result = await baum.parse(filePath);
    expect(result.type).toBe('Program');
  });
  it('should parse xml', async () => {
    const filePath = path.join(__dirname, 'input', 'document.xml');
    const result = await baum.parse(filePath);
    expect(result.person).toBeDefined();
  });
  it('should parse json', async () => {
    const filePath = path.join(__dirname, 'input', 'document.json');
    const result = await baum.parse(filePath);
    expect(result.firstName).toBe('John');
  });
});
