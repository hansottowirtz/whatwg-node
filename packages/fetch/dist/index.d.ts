/// <reference lib="dom" />
/// <reference types="urlpattern-polyfill" />

declare const _fetch: typeof fetch;
declare const _Request: typeof Request;
declare const _Response: typeof Response;
declare const _Headers: typeof Headers;
declare const _FormData: typeof FormData;
declare const _AbortController: typeof AbortController;
declare const _ReadableStream: typeof ReadableStream;
declare const _WritableStream: typeof WritableStream;
declare const _TransformStream: typeof TransformStream;
declare const _Blob: typeof Blob;
declare const _File: typeof File;
declare const _crypto: typeof crypto;
declare const _btoa: typeof btoa;
declare const _TextEncoder: typeof TextEncoder;
declare const _TextDecoder: typeof TextDecoder;
declare const _URLPattern: typeof URLPattern;

declare module "@whatwg-node/fetch" {
  export const fetch: typeof _fetch;
  export const Request: typeof _Request;
  export const Response: typeof _Response;
  export const Headers: typeof _Headers;
  export const FormData: typeof _FormData;
  export const AbortController: typeof _AbortController;
  export const ReadableStream: typeof _ReadableStream;
  export const WritableStream: typeof _WritableStream;
  export const TransformStream: typeof _TransformStream;
  export const Blob: typeof _Blob;
  export const File: typeof _File;
  export const crypto: typeof _crypto;
  export const btoa: typeof _btoa;
  export const TextDecoder: typeof _TextDecoder;
  export const TextEncoder: typeof _TextEncoder;
  export const URLPattern: typeof _URLPattern;
  export interface FormDataLimits {
    /* Max field name size (in bytes). Default: 100. */
    fieldNameSize?: number;
    /* Max field value size (in bytes). Default: 1MB. */
    fieldSize?: number;
    /* Max number of fields. Default: Infinity. */
    fields?: number;
    /* For multipart forms, the max file size (in bytes). Default: Infinity. */
    fileSize?: number;
    /* For multipart forms, the max number of file fields. Default: Infinity. */
    files?: number;
    /* For multipart forms, the max number of parts (fields + files). Default: Infinity. */
    parts?: number;
    /* For multipart forms, the max number of header key-value pairs to parse. Default: 2000. */
    headerSize?: number;
  }
  export const createFetch: (opts?: { useNodeFetch?: boolean; formDataLimits?: FormDataLimits }) => ({
    fetch: typeof _fetch,
    Request: typeof _Request,
    Response: typeof _Response,
    Headers: typeof _Headers,
    FormData: typeof _FormData,
    AbortController: typeof _AbortController,
    ReadableStream: typeof _ReadableStream,
    WritableStream: typeof _WritableStream,
    TransformStream: typeof _TransformStream,
    Blob: typeof _Blob,
    File: typeof _File,
    crypto: typeof _crypto,
    btoa: typeof _btoa,
    TextEncoder: typeof _TextEncoder,
    TextDecoder: typeof _TextDecoder,
    URLPattern: typeof _URLPattern,
  });
}

