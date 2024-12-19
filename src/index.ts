import XMLHttpRequest from "xhr2"; // Import the class directly
(global as any).XMLHttpRequest = XMLHttpRequest;

import { HavenoClient } from "haveno-ts";

main();
async function main() {
    console.log('Sample app using haveno-ts');

    // create client connected to havenod
    let client: HavenoClient = new HavenoClient("http://localhost:8080", "apitest");

    // get available balance
    const balances = await client.getBalances();
    console.log("Available balance: " + balances.getAvailableBalance());
}
