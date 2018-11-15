# Vancouver Live Transit
A react web app displaying live Translink bus locations. Data is taken from the Translink API: https://developer.translink.ca/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Frontend 

The frontend was done in React.

## Backend

I created a small proxy with Express to interface with Translink and deployed it to Heroku to bypass the CORS limitations.

## To Run

1. `$ git clone git@github.com:allisonhamelin/Vancouver-Live-Transit.git`
2. `$ yarn install`
3. `$ yarn start-client`
