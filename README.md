# bazar
## Installation
Powershell(admin) for windows

There are a few technical requirements before we start. Please install the following:

Node.js v6+ LTS and npm (comes with Node)
Git

1. Install Truffle globally.
    ```javascript
    npm install -g truffle
    ```

2. Download or clone. This also takes care of installing the necessary dependencies.
      
3. Compile the files by entering
    ```javascript
       truffle compile
    ```

4. Before we can migrate our contract to the blockchain, we need to have a blockchain running. For this tutorial, we're going to use Ganache, a personal blockchain for Ethereum development you can use to deploy contracts, develop applications, and run tests. If you haven't already, download Ganache and double click the icon to launch the application. This will generate a blockchain running locally on port 7545.

5. Back in our terminal, migrate the contract to the blockchain.
    ```javascript
     truffle migrate
     ```
6.Testing smart contracts 
    ```javascript
     truffle test```

7.Interacting with the dapp in a browser:
    ```javascript
1. Download metamask for chrome/firefox.
2. Now we need to connect MetaMask to the blockchain created by Ganache.
3. In the box marked Wallet Seed, enter the mnemonic that is displayed in Ganache.
4. Enter a password below that and click OK.
5. Click the menu that shows "Main Network" and select Custom RPC.
6. In the box titled "New RPC URL" enter http://127.0.0.1:7545 and click Save.
Warning: Do not use this mnemonic on the main Ethereum network (mainnet). If you send ETH to any account generated from this mnemonic, you will lose it all!
 ```
 
8. Run the `liteserver` development server (outside the development console) for front-end hot reloading. Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // Serves the front-end on http://localhost:3000
    npm run dev
    ```
9.Click on ```buy``` and ```submit``` it.

Note: If the button doesn't automatically change to say ```"Success"```, refreshing the app in the browser should trigger it.
