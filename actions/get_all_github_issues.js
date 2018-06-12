"use strict";
let datafire = require('datafire');
let github = require('@datafire/github').actions;

module.exports = new datafire.Action({
  inputs: [{
    type: "string",
    title: "repo"
  }, {
    type: "string",
    title: "owner"
  }],
  handler: async (input, context) => {
    let curPage = 1;
    let allIssues = [];
    let lastIssues = null;
    while (!lastIssues || lastIssues.length) {
      console.log(input);
      lastIssues = await github.repos.owner.repo.issues.get({
        repo: input.repo,
        owner: input.owner,
        state: 'all',
        page: curPage++,
        sort: 'created',
        direction: 'desc',
      }, context);
      allIssues = allIssues.concat(lastIssues);
    }
    return allIssues;
  },
});
