var ext1 = 'new.docx';
var ext2 = 'new.js';
var ext3 = 'new.html';

function getFileNamExtension(fileName) {
	return fileName.split('.').pop();
}

console.log(getFileNamExtension(ext1));
console.log(getFileNamExtension(ext2));
console.log(getFileNamExtension(ext3));