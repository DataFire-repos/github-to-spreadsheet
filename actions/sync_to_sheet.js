"use strict";
let datafire = require('datafire');

let myActions = datafire.Project.main().actions;
let google_sheets = require('@datafire/google_sheets').actions;
module.exports = new datafire.Action({
  inputs: [{
    type: "string",
    title: "owner"
  }, {
    type: "string",
    title: "repo"
  }, {
    type: "string",
    title: "sheet_id"
  }],
  handler: async (input, context) => {
    let issues = await myActions.get_all_github_issues.run({
      owner: input.owner,
      repo: input.repo,
    }, context);
    let values = issues.map(i => [i.title, i.body, i.state])
    let result = await google_sheets.spreadsheets.values.update({
      spreadsheetId: input.sheet_id,
      range: 'A2:C' + (values.length + 1),
      body: {
        values: values,
      },
      valueInputOption: 'USER_ENTERED',
    }, context);
    return result;
  },
});
