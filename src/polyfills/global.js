/*
 * From https://github.com/FredKSchott/rollup-plugin-polyfill-node
 *
 * The MIT License (MIT)
 * Copyright (c) 2020-2024 Fred K. Schott and/or other contributors
 */
export default (typeof global !== "undefined" ? global :
  typeof self !== "undefined" ? self :
  typeof window !== "undefined" ? window : {});
