const fs = require('fs');
const path = require('path');

function checkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      checkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // Check for imports from @/
      const importRegex = /from\s+['"](@\/[^'"]+)['"]/g;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        const importPath = match[1].replace('@/', 'src/');
        const parts = importPath.split('/');
        let current = '.';
        
        for (const part of parts) {
          if (!fs.existsSync(current)) {
            console.log(`PATH ERROR in ${fullPath}: Target directory ${current} does not exist`);
            break;
          }
          
          const children = fs.readdirSync(current);
          // Look for an exact case match
          if (!children.includes(part)) {
            // Check if it's a file with an extension
            const fileWithExt = children.find(c => c.startsWith(part + '.'));
            if (!fileWithExt) {
              // Check if it's a case-sensitivity issue
              const caseIssue = children.find(c => c.toLowerCase() === part.toLowerCase());
              if (caseIssue) {
                console.log(`CASE ERROR in ${fullPath}: Importing "${part}" but file is "${caseIssue}"`);
              } else {
                console.log(`MISSING ERROR in ${fullPath}: Cannot find "${part}" in "${current}"`);
              }
            }
          }
          current = path.join(current, part);
        }
      }
    }
  }
}

console.log('--- Starting Case Sensitivity Scan ---');
try {
  checkDir('src');
  console.log('--- Scan Complete ---');
} catch (err) {
  console.error('Scan failed:', err);
}
