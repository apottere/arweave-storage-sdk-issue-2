import fs from 'node:fs';
import { Configuration, StorageApi, Token, Network } from 'arweave-storage-sdk';

const key = fs.readFileSync('./.secret/privkey.txt', 'utf8');

const config = new Configuration({
    appName: 'Test',
    privateKey: key,
    network: Network.BASE_TESTNET,
    token: Token.USDC,
});

const storageClient = new StorageApi(config);
await storageClient.ready;
await storageClient.api.login();

console.log('Storage client is ready and logged in!');
