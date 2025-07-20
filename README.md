# Haveno Sample App

Sample Node.js application using the [haveno-ts](https://github.com/haveno-dex/haveno-ts) library.

# Build and run

1. `git clone https://github.com/haveno-dex/haveno-sample-app.git`
2. `cd haveno-sample-app`
3. `npm install`
4. Follow [instructions](https://github.com/haveno-dex/haveno/blob/master/docs/installing.md) to build and start a Haveno daemon: e.g. `make haveno-daemon-mainnet` or `make user1-daemon-local`.
5. Install envoy, for example: `brew install envoy`
6. Start envoy to proxy between the client's http1 and havenod's http2:
    - For a mainnet haveno daemon: `envoy -c config/envoy.yaml`
    - For a local testnet haveno daemon: `envoy -c config/envoy.local.yaml`
7. In a new terminal: `npm run start`