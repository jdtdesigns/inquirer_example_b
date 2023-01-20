const inquirer = require('inquirer');
const axios = require('axios');

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
    name: 'type',
    message: 'Please enter the command type.'
  }
]).then(data => {
  if (data.type === 'fetch') {
    inquirer.prompt({
      name: 'url',
      message: 'Please enter the api url'
    }).then(api_url_data => {
      axios.get(api_url_data.url)
        .then(res => {
          console.log(res.data);
        })
    });
  }
});