/*
 * From https://github.com/FredKSchott/rollup-plugin-polyfill-node
 *
 * The MIT License (MIT)
 * Copyright (c) 2020-2024 Fred K. Schott and/or other contributors
 */
function noop(){}

export default global.console ? global.console : {
  log: noop,
  info: noop,
  warn: noop,
  error: noop,
  dir: noop,
  assert: noop,
  time: noop,
  timeEnd: noop,
  trace: noop
};
