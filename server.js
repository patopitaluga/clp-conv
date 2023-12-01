require('http').createServer((req, res) => {
  res.end(require('fs').readFileSync(require('path').resolve(__dirname, './index.html'), 'utf8'));
}).listen(3000, () => console.log('Listening port 3000'));
