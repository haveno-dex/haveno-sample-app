# Haveno Sample App

Sample Node.js application using the [haveno-ts](https://github.com/haveno-dex/haveno-ts) library.

## Start the backend

1. Build [Haveno](https://github.com/haveno-dex/haveno/blob/master/docs/installing.md).
2. Install [Envoy](https://www.envoyproxy.io/docs/envoy/latest/start/install.html), for example: `brew install envoy`.
3. From the haveno repository, start a daemon and its Envoy proxy in separate terminals:

    ```bash
    # terminal 1: start the Haveno daemon
    make haveno-daemon-mainnet
    ```

    ```bash
    # terminal 2: start the Envoy proxy
    make envoy-mainnet
    ```

    To use test funds instead, run `make haveno-daemon-stagenet` and `make envoy-stagenet`.

## Run the app

In a new terminal:

```bash
git clone https://github.com/haveno-dex/haveno-sample-app.git
cd haveno-sample-app
npm install
npm run start
```

The app connects to the daemon through the proxy at `http://localhost:8080`, then prints the wallet balance and the number of USD offers. Edit [src/index.ts](src/index.ts) to build from there.

## Use a local test network

To run against a [local Haveno network](https://github.com/haveno-dex/haveno/blob/master/docs/installing.md), start the local daemons, then start the proxy from this repository: `envoy -c config/envoy.local.yaml`. The app connects to user1's daemon.
