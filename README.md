# Sync GitHub issues to a Google Sheet

This project will write all the issues in a particular GitHub repository to rows of a Google Sheet.

## Setup

First, you'll need to create a new spreadsheet in Google sheets.

To set up this project, change the repo, owner, and sheet_id under Triggers -> Tasks -> sync_issues

The sheet_id can be found by looking at the URL for your spreadsheet:

https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit

## Customization

You can change the fields that are added to the sheet by editing Actions -> sync_to_sheet. Be sure to update both `values` and `range` to reflect your changes