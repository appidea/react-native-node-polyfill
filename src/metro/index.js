const path = require('path');

const resolveLocation = baseLocation => path.resolve(__dirname, '../polyfills/' + baseLocation);
const EMPTY_PATH = resolveLocation('empty.js');

const libs = new Map();

libs.set('process', resolveLocation('process-es6.js'));
libs.set('global', resolveLocation('global.js'));
libs.set('buffer', resolveLocation('buffer-es6.js'));
libs.set('util', resolveLocation('util.js'));
libs.set('sys', libs.get('util'));
libs.set('events', resolveLocation('events.js'));
libs.set('stream', resolveLocation('stream.js'));
libs.set('path', resolveLocation('path.js'));
libs.set('querystring', resolveLocation('querystring.js'));
libs.set('punycode', resolveLocation('punycode.js'));
libs.set('url', resolveLocation('url.js'));
libs.set('string_decoder', resolveLocation('string-decoder.js'));
libs.set('http', resolveLocation('http.js'));
libs.set('https', resolveLocation('http.js'));
libs.set('os', resolveLocation('os.js'));
libs.set('assert', resolveLocation('assert.js'));
libs.set('constants', resolveLocation('constants.js'));
libs.set('_stream_duplex', resolveLocation('__readable-stream/duplex.js'));
libs.set('_stream_passthrough', resolveLocation('__readable-stream/passthrough.js'));
libs.set('_stream_readable', resolveLocation('__readable-stream/readable.js'));
libs.set('_stream_writable', resolveLocation('__readable-stream/writable.js'));
libs.set('_stream_transform', resolveLocation('__readable-stream/transform.js'));
libs.set('_inherits', resolveLocation('inherits.js'));
libs.set('_buffer_list', resolveLocation('__readable-stream/buffer-list.js'));
libs.set('timers', resolveLocation('timers.js'));
libs.set('console', resolveLocation('console.js'));
libs.set('vm', resolveLocation('vm.js'));
libs.set('zlib', resolveLocation('zlib.js'));
libs.set('tty', resolveLocation('tty.js'));
libs.set('domain', resolveLocation('domain.js'));

// TODO: Decide if we want to implement these or not
// currently causing trouble in tests
libs.set('fs', EMPTY_PATH);
libs.set('crypto', EMPTY_PATH);
// libs.set('fs', resolveLocation('browserify-fs.js'));
// libs.set('crypto', resolveLocation('crypto-browserify.js'));

// TODO: No good polyfill exists yet
libs.set('http2', EMPTY_PATH);

// not shimmed
libs.set('dns', EMPTY_PATH);
libs.set('dgram', EMPTY_PATH);
libs.set('child_process', EMPTY_PATH);
libs.set('cluster', EMPTY_PATH);
libs.set('module', EMPTY_PATH);
libs.set('net', EMPTY_PATH);
libs.set('readline', EMPTY_PATH);
libs.set('repl', EMPTY_PATH);
libs.set('tls', EMPTY_PATH);
libs.set('perf_hooks', EMPTY_PATH);

const nodePolyfill = (context, moduleName, platform) => {
  if (libs.has(moduleName)) {
    const lib = libs.get(moduleName);
    // Logic to resolve the module name to a file path...
    // NOTE: Throw an error if there is no resolution.
    return {
      filePath: lib,
      type: 'sourceFile',
    };
  }
  // Optionally, chain to the standard Metro resolver.
  return context.resolveRequest(context, moduleName, platform);
}

module.exports = {
  resolver: {
    resolveRequest: nodePolyfill
  }
};
