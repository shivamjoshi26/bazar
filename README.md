# bazar
## Installation


There are a few technical requirements before we start. Please install the following:

Node.js v6+ LTS and npm (comes with Node)
Git

1. Install Truffle globally.
    ```javascript
    npm install -g truffle
    ```

2. Download or clone. This also takes care of installing the necessary dependencies.
      
3. ```javascript
       truffle compile
   ```

4. Before we can migrate our contract to the blockchain, we need to have a blockchain running. For this tutorial, we're going to use Ganache, a personal blockchain for Ethereum development you can use to deploy contracts, develop applications, and run tests. If you haven't already, download Ganache and double click the icon to launch the application. This will generate a blockchain running locally on port 7545.

5. Back in our terminal, migrate the contract to the blockchain.
```javascript
truffle migrate
```
5. Run the `liteserver` development server (outside the development console) for front-end hot reloading. Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // Serves the front-end on http://localhost:3000
    npm run dev
    ```
