const algosdk = require('algosdk');
// In order to do an ASA tutorial, we will need to generate 3 accounts
// once created, copy off the values which we will paste into the tutorial code
// once created sucessfully, you will need to add funds to all three
// The Algorand TestNet Dispenser is located here: 
// https://bank.testnet.algorand.network/
var acct = null;

acct = algosdk.generateAccount();

account1 = acct.addr;
console.log("Account 1 = " + account1);
var account1_mnemonic = algosdk.secretKeyToMnemonic(acct.sk);
console.log("Account Mnemonic 1 = "+ account1_mnemonic);
var recoveredAccount1 = algosdk.mnemonicToSecretKey(account1_mnemonic);
var isValid = algosdk.isValidAddress(recoveredAccount1.addr);
console.log("Is this a valid address: " + isValid);
console.log("Account created. Save off Mnemonic and address");
console.log("");
console.log("Add funds to all of these accounts using the TestNet Dispenser at https://bank.testnet.algorand.network/ ");
console.log("");
console.log("Copy off these 3 lines of code and they will be pasted in the subsequent Tutorial code");
console.log("");
console.log("var account1_mnemonic = \"" + account1_mnemonic + "\"");
const token = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const server = "http://localhost";
const port = 4001;
// Instantiate the algod wrapper
let algodclient = new algosdk.Algodv2(token, server, port);

(async () => {
    let account_info = (await algodclient.accountInformation(recoveredAccount1.addr).do());
    let acct_string = JSON.stringify(account_info);
    console.log("Account 1 Info: " + acct_string);
})().catch(e => {
   // console.log(e);
});