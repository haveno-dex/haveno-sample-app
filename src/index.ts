import { HavenoClient } from "haveno-ts";

main();
async function main() {
    console.log('Sample app using haveno-ts');

    // create client connected to havenod
    let client: HavenoClient = new HavenoClient("http://127.0.0.1:8080", "apitest");

    // get available balance
    const balances = await client.getBalances();
    console.log("Available balance: " + balances.getAvailableBalance());

    // get offers
    const offers = await client.getOffers("USD");
    console.log("Number of USD offers: " + offers.length);
}