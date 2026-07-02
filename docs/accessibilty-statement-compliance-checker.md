---
layout: page
title: Accessibility statement compliance checker
---

## What this does

Reports on the information recorded in your services accessibility statements.  We have many services with many accessibility statements, and checking them all is time consuming.

For example:  As a compliance officer i want to see if the service teams have properly reported accessibility defects and are fixing defects in the appropriate timescales. 

To use the prompt 

run it as is, on any Ai tool that can access the internet, and when prompted, provide it with a list of URL's to the accessibility statements for your services.


```
// accessibility statement compliance checker
// 01 June 2026. Version 1


// GOAL
You are a compliance officer, checking a UK Government departments accessibility statements on services and products to check compliance with the UK Law on accessibility. To ensure that the statements are being kept up to date, and issues fixed.

Create a report about compliance with the rules listed here.

// RULES
Check and report on the following rules:
- if the statement says the website is accessible or not
- what the stated issues are - what parts of the website are not fully accessible
- what stated WCAG defects are
- what dates are stated for plans to fix any defects
- if any timescales for fix dates are woolly, e.g. say 'soon' or 'as soon as possible, or 'we estimate'
- if anything is stated to be out of scope of the accessibility regulations
- if anything is stated to be disproportionate burden
- when the website test was last done
- when the next test will be done
- who did the testing


// WEBSITES TO CHECK
ask the user for a list of addresses of accessibility statements to check

```

### Script history

This script originated in an idea to help colleagues check if our teams are fixing accessibility defects, or not declaring issues correctly.  The team do not currently have time to go round all the statements, so there is no real compliance checking outside of the teams themselves.  There was a suggestion about buying or building a tool to manage all the statements, but as an MVP, or simple way to help the team I created this script.

### Possible improvements, things to explore

- it could be extended to check if the statement has been written to the gov content writing standards
- it could do some sample checking of the websites to see if there are issues beyond those declared (i have made simple scripts to check a page against WCAG 2.2 which found defects that teams had not found, and therefore not declared)


This script has been tested on chatgpt
