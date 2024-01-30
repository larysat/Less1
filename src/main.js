 const fs = require('fs-extra');

 const folderNameOne = 'test_dir1';
 const folderNameTwo = 'test_dir2';
 const folderNameThree = 'test_dir3';

 //Create folder#1
 fs.ensureDirSync(folderNameOne);

 //Create file in folder#1
 fs.ensureFileSync(`${folderNameOne}/file.txt`);

 //Create folder#2
 fs.ensureDirSync(folderNameTwo);
 //Move file from folder#1 to folder#2
 fs.moveSync(`${folderNameOne}/file.txt`, `${folderNameTwo}/file.txt`);

 //Create folder#3
 fs.ensureDirSync(folderNameThree);
 //Copy file in folder#2 to folder#3
 fs.copySync(`${folderNameTwo}/file.txt`, `${folderNameThree}/newfile.txt`);

//Remove file.txt and newfile.txt
 fs.removeSync(`${folderNameTwo}/file.txt`);
 fs.removeSync(`${folderNameThree}/newfile.txt`);

 //Remove all folders
 fs.removeSync(`${folderNameOne}`);
 fs.removeSync(`${folderNameTwo}`);
 fs.removeSync(`${folderNameThree}`);