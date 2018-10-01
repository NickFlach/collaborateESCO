const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');


//delete "build" folder
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

//read 'Campaign.sol' from the contracts folder
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

//compile
const output = solc.compile(source, 1).contracts;

//point at the 'build' folder
fs.ensureDirSync(buildPath);

//iterate over the contract objects and create json files for each in the 'build' folder
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}
