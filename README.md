## react-native-node-polyfill

This package is a polyfill of Node.js core modules for React Native (to use with Metro).

Important: It does not provide the compatibility layer with React Native library-based functions like [node-libs-react-native](https://github.com/parshap/node-libs-react-native), at least in this version.

The benefit of this package is that it is a simple polyfill for Node.js core modules, so there is zero dependency on any native module. Just pure javascript code to _make it work_.

All the polyfills were forked from [rollup-plugin-polyfill-node](https://github.com/FredKSchott/rollup-plugin-polyfill-node). Thank You, all contributors, for a great job.

## Installation

```sh
npm install @appidea/react-native-node-polyfill
```

## Usage

Modify Your `metro.config.js` file to include the following:

```javascript
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');
// import the polyfill
const nodePolyfill = require('@appidea/react-native-node-polyfill');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), nodePolyfill, config);
/*                                                        ^ ADD THIS ^ */
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.


