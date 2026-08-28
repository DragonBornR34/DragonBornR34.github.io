#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const foldersToMove = [
  '.devcontainer',
  '.github',
  '.vscode',
  'asd-projects',
  'fsd-projects',
  'project-instructions',
  'scripts'
];

const archiveMainPath = path.join(__dirname, 'ArchiveMain');

// Ensure ArchiveMain exists
if (!fs.existsSync(archiveMainPath)) {
  fs.mkdirSync(archiveMainPath, { recursive: true });
  console.log('✓ Created ArchiveMain directory');
}

// Move each folder
foldersToMove.forEach(folder => {
  const sourcePath = path.join(__dirname, folder);
  const destPath = path.join(archiveMainPath, folder);
  
  if (fs.existsSync(sourcePath)) {
    try {
      execSync(`git mv "${sourcePath}" "${destPath}"`, { stdio: 'inherit' });
      console.log(`✓ Moved ${folder} to ArchiveMain/`);
    } catch (error) {
      console.error(`✗ Failed to move ${folder}:`, error.message);
    }
  } else {
    console.log(`⊘ Folder not found: ${folder}`);
  }
});

console.log('\n✓ All folders moved! Now run:');
console.log('  git commit -m "Move folders into ArchiveMain"');
console.log('  git push origin move-folders-to-archive');
