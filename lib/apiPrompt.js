const inquirer = require('inquirer');
const axios = require('axios');

function apiPrompt() {
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

module.exports = apiPrompt;