# Friday Finance QA Engineer Challenge

This repository contains a resolution for [Friday Finance QA Engineer Challenge](https://github.com/fridayfinance/challenges/tree/main/qa).

## Test specifications

For this challenge I choose to verify the following features/requirements:

### Cookies banner

In order to comply to GDPR we must show a banner asking user consent to store cookies. For this requirement, 2 scenarios will be tested:

1. User accept cookies: verify whether and what cookies are stored
1. User deny cookies: no cookie should be stored

### Sign up with email

A new user must be registered without any problems. A user that have problems signing up, can never come back.

Scenarios:
For this feature, only an successful flow will be automated.

### Login flow

A registered user must have no problems to login in the system. In case there is an unexpected problem, the user must be notified.

Scenarios:

1. Successful login: the must reach the home page
1. Error logging in: the user must receive a notification

### Home visual regression

In order to check if every element is on the right place, with right colors. This does not check any feature. Just the layout.

## Running the project

To run this project, you can choose the 3 ways below, from easier to harder:

1. [GitHub Actions](#github-actions)
1. [GitHub Codespaces](#github-codespaces)
1. [Devcontainer in VS Code](#devcontainer-in-vs-code)
1. [Locally in your machine](#locally-in-your-machine)

### GitHub Actions

### GitHub Codespaces

### Devcontainer in VS Code

### Locally in your machine
