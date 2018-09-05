# Sync GitHub issues to a Google Sheet

This project will write all the issues in a particular GitHub repository to rows of a Google Sheet.

## Setup

First, you'll need to create a new spreadsheet in Google sheets.

To set up this project, change the repo, owner, and sheet_id under Triggers -> Tasks -> sync_issues

The sheet_id can be found by looking at the URL for your spreadsheet:

https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit

### Accounts
You'll also need to add your credentials for GitHub and Google Sheets. You can do this by going to the `Integrations` tab in your project on datafire.io, or using `datafire authenticate` on the command line.

#### Sheets
You'll need this scope: https://www.googleapis.com/auth/spreadsheets

#### GitHub
If your repo is public, you just need the `user` scope. If your repo is private, you'll need the `repo` scope

## Customization

You can change the fields that are added to the sheet by editing Actions -> sync_to_sheet. Be sure to update both `values` and `range` to reflect your changes
