import fs from 'fs'
const readDatabase = (path) => {
  const asyncData = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      // eslint-disable-next-line no-param-reassign
      const dataP = data.split('\n')
      console.log(dataP)
      dataP.shift()
      let reqObj = {
      'CS': [],
      'SWE': []
      }
      for (const data of dataP) {
        const splitData = data.split(',');
        if (data.includes('CS')) {
        reqObj['CS'].push(splitData[0]);
        }
        if (data.includes('SWE')) {
        reqObj['SWE'].push(splitData[0]);
        }
      }
      console.log(reqObj)
      resolve(reqObj)
});
});
return asyncData
};

module.exports = readDatabase
