
# Nervos-Hackathon
 Task 0: Set up node, Indexer and sync with aggron test net
 
![Nervos Node   Indexer](https://user-images.githubusercontent.com/82784007/129019372-daadbc03-fb7b-4d68-bfd2-ceb70fd9b019.png)

Nervos Node

![Node](https://user-images.githubusercontent.com/82784007/129020443-33276030-35ff-43bf-b5dc-ddcbcca30e39.png)

Nervos Indexer

![Indexer](https://user-images.githubusercontent.com/82784007/129020500-be30db2a-7e5d-4850-92ff-eb0b9c58f984.png)


Task - 1  Hackathon: Nervos - Broaden the Spectrum
Gitcoin: 1) Create a Godwoken Account on the EVM Layer 2 Testnet

A screenshot of the accounts you created (account list) in ckb-cli.

![ckb-cli account](https://user-images.githubusercontent.com/82784007/129049804-84767c60-a26e-4487-b143-4dddb9154299.png)

A link to the Layer 1 address you funded on the Testnet Explorer. 

https://explorer.nervos.org/aggron/address/ckt1qyqgqwms8w5h37xczsydrv4fayfzs23egxqqr2752p

A screenshot of the console output immediately after you have successfully submitted a deposit to Layer 2. funded

![Layer2 Account Deposit](https://user-images.githubusercontent.com/82784007/129056521-71c88183-08bd-4bab-ad07-f45e159936fd.png)

Task - 2  Hackathon: Nervos - Broaden the Spectrum
Gitcoin: 2) Deploy a Simple Ethereum Smart Contract on Polyjuice

1. A screenshot of the console output immediately after you have successfully deployed a smart contract:

![Deploy Simple Smart Contract](https://user-images.githubusercontent.com/82784007/129062724-09580049-a9d5-46fb-ba1f-5a12da4b99c8.png)

2. The transaction hash from the contract deployment (in text format):

Transaction hash: 0x5d38f443611825bd3cdb702296c9e72dcf466ac6c358fe911a07796851ccc1ad

3. The deployed contract address from the contract deployment (in text format):

Deployed contract address: 0xEEf65969B4C9BE43A9727C88Db5fc0B86f93df6B


Task -3  Hackathon: Nervos - Broaden the Spectrum
Gitcoin: 3) Issue a Smart Contract Call to the Deployed Smart Contract

1. A screenshot of the console output immediately after you have successfully issued a smart contract call.

![Call Smart Contract](https://user-images.githubusercontent.com/82784007/129067328-9234808f-7b5e-443f-bbfd-8efa177eb801.png)

2. The transaction hash from the console output (in text format).

transactionHash: '0xf631a452539d4f0e81343d72ac098631f6177dca28a12571a29a85e7d0a2ea4b'

3. The contract address that you called (in text format).

Deployed contract address: 0xEEf65969B4C9BE43A9727C88Db5fc0B86f93df6B

4. The ABI for contract you made a call on (in text format).

![ABI](https://user-images.githubusercontent.com/82784007/129067862-f0b58dcb-2d4d-4185-a2b1-c5e5dfb9fc3c.png)

[
    {
      "inputs": [],
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "x",
          "type": "uint256"
        }
      ],
      "name": "set",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  
  Task - 4  Hackathon: Nervos - Broaden the Spectrum
Gitcoin: 4) Issue an SUDT Token on Layer 1 and Deposit it to Layer 2

1. A link to the Layer 1 address you funded on the Testnet Explorer.

https://explorer.nervos.org/aggron/transaction/0x28612d83959c6b382fbd3fab3278b97aef4e3816aecc335c6094c13e95c46b15

2. A screenshot of the console output immediately after using sudt-cli to create your SUDT tokens on Layer 1.

![SUDT-CLI](https://user-images.githubusercontent.com/82784007/129071348-50beefb7-dd8a-4acd-8e19-80771053808f.png)

3. A link to the transaction ID created by sudt-cli on the Testnet Explorer.

https://explorer.nervos.org/aggron/transaction/0x28612d83959c6b382fbd3fab3278b97aef4e3816aecc335c6094c13e95c46b15

4. A screenshot of the console output immediately after you have successfully submitted a deposit to Layer 2 using the account-cli tool.

![SUDT-CLI console](https://user-images.githubusercontent.com/82784007/129073803-be9c8f42-9a2a-441a-8d11-26d7bf4e58b6.png)

5. The SUDT ID from the console output after executing the deposit script (in text format).

Your sudt id: 1788

Task - 5  Hackathon: Nervos - Broaden the Spectrum
Gitcoin: 5) Deploy the ERC20 Proxy Contract for the Deposited SUDT

1. A screenshot of the console output immediately after deploying smart contract.

![Deploying Contract](https://user-images.githubusercontent.com/82784007/129076416-d8f57b46-14b4-4881-8de6-68f370e367c8.png)

2. The address of the ERC20 Proxy Contract you deployed (in text format).

Deployed SUDT-ERC20 Proxy contract address: 0x187ca51118884232BCDB8D6A53829836D83EDD63

3. A screenshot of the console output immediately after checking your SUDT balance.

![Check SUDT Balance](https://user-images.githubusercontent.com/82784007/129077537-3563a766-e138-447a-9870-3b78d95ed382.png)

4. The Ethereum address that was checked (in text format).

Using Ethereum address: 0x9066D17b250066F522c5BEe0cddD2f5F68A51A90


Task - 6  Hackathon: Nervos - Broaden the Spectrum
Gitcoin: 6) Use Force Bridge to Deposit Tokens From Ethereum to Polyjuice

1. A screenshot of the console output immediately after you have successfully generated your Deposit Receiver Address.

![Poljuice address](https://user-images.githubusercontent.com/82784007/129094381-f317bc90-5d46-4eff-8b68-708ed0e5fe09.png)

2. Your Deposit Receiver Address (in text format).

Deposit to Layer 2 address on Layer 1: 
ckt1q3dz2p4mdrvp5ywu4kk5edl2uc4p03puvx07g7kgqdau3n3dmypkqnxzuefxyp9wdghglncj77k5wt6p59sx6kukyjlwh5s467qgp8m25yqqqqqsqqqqqvqqqqqfjqqqqz6dfs55thlqsq63h437h8a7cckn32qftcqu2840jrq0m5el87gx76gqqqqpqqqqqqcqqqqqxyqqqqx7asf60w8pqpte2sfcfn90fdfzxue7ff2g8sawe9wacnqat6jmygqngqqqqpxv9ejjvgz2u63w3l839aadguh5rgtqd4devf97a0fpt4uqsz0k4yrx69aj2qrx753vt0hqehwj7hmg55dfqq9rqgqqqqqqcqdu5c9m

3. The Ethereum address used to generate the Deposit Receiver Address (in text format).

Using Ethereum address: 0x9066D17b250066F522c5BEe0cddD2f5F68A51A90

4. A link to the Etherscan explorer for the successful Force Bridge transaction. This can be found on Force Bridge under History→Succeed.

https://rinkeby.etherscan.io/tx/0x797969cdfc96570e2d14e888aa30afae1ab6138ce713be7f80528ca450b9d67e

5. A link to the Nervos explorer for the successful Force bridge transaction. This can be found on Force Bridge under History→Succeed.

https://explorer.nervos.org/aggron/transaction/0x830e3bf888857a4e42058a0d6ac39041dbacc34e18f9f98ba01b15156da3499d

Task 7:  Hackathon: Nervos - Broaden the Spectrum
Gitcoin: 7) Port an Existing Ethereum dApp to Polyjuice

1. Screenshots or video of your application running on Godwoken.

![Screenshot from 2021-08-14 10-28-47](https://user-images.githubusercontent.com/82784007/129449933-0f3c4627-3b62-4361-8552-1111fe15606c.png)

2. Link to the GitHub repository with your application which has been ported to Godwoken.

https://github.com/amrosaeed/Nervos-Hackathon/tree/master/Task%207/Blockchain-Wokshop

3. If you deployed any smart contracts as part of this tutorial, please provide the transaction hash of the deployment transaction, the deployed contract address, and the ABI of the deployed smart contract. (Provide all in text format.)

transaction hash of the deployment transaction : 0x39757cd5b41eceeb850266591f6138976ede726f26125647a49bafb2074139fb

the deployed contract address : 0x7780B11649FFf04e217A6EF84265b3ecA04D965e

3.ABI of the deployed smart contract :

  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
