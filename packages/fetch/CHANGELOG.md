# @whatwg-node/fetch

## 0.6.2

### Patch Changes

- [#258](https://github.com/ardatan/whatwg-node/pull/258) [`802cb96`](https://github.com/ardatan/whatwg-node/commit/802cb9636eddd8e819b80604fc26d40aac92c828) Thanks [@enisdenjo](https://github.com/enisdenjo)! - Node ponyfill requests must have an abort signal

## 0.6.1

### Patch Changes

- [`9752cca`](https://github.com/ardatan/whatwg-node/commit/9752cca54e7636114d87849ca9c7eb9be3d9dba8) Thanks [@ardatan](https://github.com/ardatan)! - Remove unnecessary ponyfill for the envs supporting Fetch by default

## 0.6.0

### Minor Changes

- [#241](https://github.com/ardatan/whatwg-node/pull/241) [`563cfaa`](https://github.com/ardatan/whatwg-node/commit/563cfaaacf8bb0b08371b7f44887321d7e7c472d) Thanks [@ardatan](https://github.com/ardatan)! - Drop itty-router in favor of new URLPattern in the fetch ponyfill

### Patch Changes

- [#241](https://github.com/ardatan/whatwg-node/pull/241) [`563cfaa`](https://github.com/ardatan/whatwg-node/commit/563cfaaacf8bb0b08371b7f44887321d7e7c472d) Thanks [@ardatan](https://github.com/ardatan)! - dependencies updates:
  - Added dependency [`urlpattern-polyfill@^6.0.2` ↗︎](https://www.npmjs.com/package/urlpattern-polyfill/v/6.0.2) (to `dependencies`)

## 0.5.4

### Patch Changes

- [#237](https://github.com/ardatan/whatwg-node/pull/237) [`166102f`](https://github.com/ardatan/whatwg-node/commit/166102f6ff52d2197ab7f78c63392b95ebca259c) Thanks [@enisdenjo](https://github.com/enisdenjo)! - http2 support when using Node ponyfill

## 0.5.3

### Patch Changes

- [`188ac01`](https://github.com/ardatan/whatwg-node/commit/188ac01dab264ed483dbc3b897e6958b49085922) Thanks [@ardatan](https://github.com/ardatan)! - Fix destroy for Node 18

## 0.5.2

### Patch Changes

- [#179](https://github.com/ardatan/whatwg-node/pull/179) [`3297c87`](https://github.com/ardatan/whatwg-node/commit/3297c87409c3bcf8700dd447d603da657acbd821) Thanks [@ardatan](https://github.com/ardatan)! - Fix destroy method for ReadableStream to Readable conversion

## 0.5.1

### Patch Changes

- [`a8a7cfc`](https://github.com/ardatan/whatwg-node/commit/a8a7cfcbb98c5ca8fff3b4a6d8638e9208690b61) Thanks [@ardatan](https://github.com/ardatan)! - Fix for new undici

## 0.5.0

### Minor Changes

- [`ab5fb52`](https://github.com/ardatan/whatwg-node/commit/ab5fb524753bc7a210b1aaf2e1580566907d4713) Thanks [@ardatan](https://github.com/ardatan)! - Drop broken `fieldsFirst` flag

## 0.4.7

### Patch Changes

- [`e59cbb6`](https://github.com/ardatan/whatwg-node/commit/e59cbb667dfcbdd9c0cf609fd56dbd904ac85cbd) Thanks [@ardatan](https://github.com/ardatan)! - Do not patch global Headers if it is native, and support URL as a first parameter of `fetch`

## 0.4.6

### Patch Changes

- [`c918527`](https://github.com/ardatan/whatwg-node/commit/c918527f15eb6096656376648dccdbc8d6898395) Thanks [@ardatan](https://github.com/ardatan)! - Bump Undici

- [#148](https://github.com/ardatan/whatwg-node/pull/148) [`eb10500`](https://github.com/ardatan/whatwg-node/commit/eb105005fd01bd227eff8d52c22b39ea1a8c6700) Thanks [@ardatan](https://github.com/ardatan)! - - On Node 14, fix the return method of Response.body's AsyncIterator to close HTTP connection correctly
  - On Node 14, handle ReadableStream's cancel correctly if Response.body is a ReadableStream
  - Do not modify ReadableStream.cancel's behavior but handle it internally
  - On Node 18, do not combine Response.body's return and AbortController which causes a memory leak

## 0.4.5

### Patch Changes

- [#140](https://github.com/ardatan/whatwg-node/pull/140) [`5d151df`](https://github.com/ardatan/whatwg-node/commit/5d151df8c59329a470b8ffa6e3547aae72a7e55b) Thanks [@ardatan](https://github.com/ardatan)! - Fix Request.formData method

## 0.4.4

### Patch Changes

- [`9502102`](https://github.com/ardatan/whatwg-node/commit/9502102b265945b37ee38b276ec1533fae0f308f) Thanks [@ardatan](https://github.com/ardatan)! - Breaking Change: Event API is no longer available in this ponyfill; use @whatwg-node/events instead.

## 0.4.3

### Patch Changes

- [`c9f05f2`](https://github.com/ardatan/whatwg-node/commit/c9f05f21fb96f63bc22359e3b7981cb9b3b727b5) Thanks [@ardatan](https://github.com/ardatan)! - Add ponyfills for Response.redirect, Response.json and Response.error

## 0.4.2

### Patch Changes

- [`7f37b6d`](https://github.com/ardatan/whatwg-node/commit/7f37b6dbeb76cfa54e0ed8672812bf016c1df4fa) Thanks [@ardatan](https://github.com/ardatan)! - fix(fetch): respect filesLimit even with fieldsFirst

## 0.4.1

### Patch Changes

- [`53753bb`](https://github.com/ardatan/whatwg-node/commit/53753bb5dd83fbc1e7253784b02f2b1f2e02fdb9) Thanks [@ardatan](https://github.com/ardatan)! - fix(fetch): fix formData function

## 0.4.0

### Minor Changes

- [`005937c`](https://github.com/ardatan/whatwg-node/commit/005937c72749dfa3914c8b6193a88c772a522275) Thanks [@ardatan](https://github.com/ardatan)! - feat(fetch): new `fieldsFirst` option to allow async stream consumption for multipart forms

- [`effc03d`](https://github.com/ardatan/whatwg-node/commit/effc03d58793328595183ac7cd5c9abab95dec17) Thanks [@ardatan](https://github.com/ardatan)! - Bun Support

## 0.3.2

### Patch Changes

- [`982fa96`](https://github.com/ardatan/whatwg-node/commit/982fa96b09af404a21154098499202bfd29c2054) Thanks [@ardatan](https://github.com/ardatan)! - fix(ponyfill/btoa): handle incoming value as binary encoding

## 0.3.1

### Patch Changes

- [`a3bc171`](https://github.com/ardatan/whatwg-node/commit/a3bc17120fbdf641e4363d08ba79955005f5b3d6) Thanks [@ardatan](https://github.com/ardatan)! - fix btoa ponyfill

## 0.3.0

### Minor Changes

- [`8a431d3`](https://github.com/ardatan/whatwg-node/commit/8a431d309271c0d1ff7248ec26afe293ccc01bf6) Thanks [@ardatan](https://github.com/ardatan)! - Add "btoa" ponyfill for Node 14

* [`8a431d3`](https://github.com/ardatan/whatwg-node/commit/8a431d309271c0d1ff7248ec26afe293ccc01bf6) Thanks [@ardatan](https://github.com/ardatan)! - Support different encodings in TextEncoder and TextDecoder

## 0.2.9

### Patch Changes

- [`9a8d873`](https://github.com/ardatan/whatwg-node/commit/9a8d8731ff07ea585b1e561718584fbe5edeb963) Thanks [@ardatan](https://github.com/ardatan)! - Workaround for a potential leak on Node 18

## 0.2.3

### Minor Changes

- 486c35d: Export Event API

## 0.1.1

### Patch Changes

- 16aff71: Fix missing TextEncoder and TextDecoder in the default ponyfill

## 0.1.0

### Minor Changes

- b83d7f3: Faster TextEncoder & TextDecoder with Buffer in Node
- b83d7f3: Ponyfill for WebCrypto API

### Patch Changes

- b83d7f3: Bump undici version
- b83d7f3: Now ponyfills Event API

## 0.0.2

### Patch Changes

- 3207383: Fix TS typings

## 0.0.1

### Patch Changes

- 889eccf: NEW RELEASES
