"use strict";
let datafire = require('datafire');
let github = require('@datafire/github').actions;

module.exports = new datafire.Action({
  inputs: [{
    type: "string",
    title: "repo"
  }, {
    type: "string",
    title: "user"
  }],
  handler: async (input, context) => {
    let curPage = 1;
    let allIssues = [];
    let lastIssues = null;
    while (!lastIssues || lastIssues.length) {
      lastIssues = await github.user.repo.issues.get({
        repo: input.repo,
        user: input.user,
        state: 'all',
        page: curPage++,
        sort: 'created',
        direction: 'desc',
      });
      allIssues = allIssues.concat(lastIssues);
    }
    return allIssues;
  },
});
