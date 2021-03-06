module.exports = {
  contracts_build_directory: 'dist/artifacts',
  compilers: {
    solc: {
      version: '0.4.24',
    },
  },
  networks: {
    cldev: {
      host: '127.0.0.1',
      port: 18545,
      // eslint-disable-next-line @typescript-eslint/camelcase
      network_id: '*',
      gas: 4700000,
      gasPrice: 5e9,
    },
  },
}
