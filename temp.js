const fs = require('fs');
let data = fs.readFileSync('c:/Etudes/DEMS/ophto-app/src/data/imagingDmlaData.js', 'utf8');
data = data.replace('export const', 'const');
eval(data);
const ch = dmlaChapters.find(c => c.title.includes('4.3'));
if(ch) {
  const matches = ch.content.match(/src="(\/images\/[^"]+)"/g);
  if(matches) {
    matches.forEach(m => {
       const img = m.match(/src="(\/images\/[^"]+)"/)[1];
       console.log(img);
    });
  }
}
