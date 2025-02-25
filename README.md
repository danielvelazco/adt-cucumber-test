## Background

Technical Test: QA Engineer  

## Prerequisites
- NodeJS v22 or above
- Docker (If run the test via Dockerfile)

## Technical Stack
- Javascript
- [Cucumber](https://cucumber.io/)

## Run tests
### Local
- Clone this repo and install the dependencies
    `npm install`
- Execute the following command:  
    `npm test`

### Docker
- Clone this repo and install the dependencies
    `npm install`
- Execute the following command:  
    `npm run test:docker`  

### Github actions
- Go to the test workflow in Actions tab  
    `https://github.com/danielvelazco/adt-cucumber-test/actions/workflows/test.yml`
- Click on the grey Run workflow button
- Select the branch (main by default)
- Clicks on the green Run workflow button
  
  ![action](https://github.com/user-attachments/assets/29b74c30-3b78-4488-8967-3408d4600f16)
