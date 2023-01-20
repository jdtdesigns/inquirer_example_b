const inquirer = require('inquirer');
const apiPrompt = require('./apiPrompt.js');

function promptUser() {
  inquirer.prompt([
    {
      name: 'name',
      message: 'Please enter your name.'
    },
    {
      // type: 'input',
      name: 'age',
      message: 'Please enter your age.'
    },
    {
      type: 'list',
      name: 'type',
      message: 'Please enter the command type.',
      choices: ['fetch', 'another', 'fruits']
    }
  ]).then(data => {
    if (data.type === 'fetch') {
      return apiPrompt();
    }

    console.log('Thanks for using our app!');
  });
}

module.exports = promptUser;