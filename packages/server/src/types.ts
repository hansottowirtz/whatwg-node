import type { RequestListener } from 'node:http';
import type { NodeRequest, NodeResponse } from './utils';

export interface FetchEvent extends Event {
  waitUntil(f: Promise<void> | void): void;
  request: Request;
  respondWith(r: Response | PromiseLike<Response>): void;
}

export interface ServerAdapterBaseObject<
  TServerContext,
  THandleRequest extends ServerAdapterRequestHandler<TServerContext> = ServerAdapterRequestHandler<TServerContext>
> {
  /**
   * An async function that takes `Request` and the server context and returns a `Response`.
   * If you use `requestListener`, the server context is `{ req: IncomingMessage, res: ServerResponse }`.
   */
  handle: THandleRequest;
}

export interface ServerAdapterObject<
  TServerContext,
  TBaseObject extends ServerAdapterBaseObject<TServerContext, ServerAdapterRequestHandler<TServerContext>>
> extends EventListenerObject {
  /**
   * A basic request listener that takes a `Request` with the server context and returns a `Response`.
   */
  handleRequest: TBaseObject['handle'];
  /**
   * WHATWG Fetch spec compliant `fetch` function that can be used for testing purposes.
   */
  fetch(request: Request, ctx: TServerContext): Promise<Response> | Response;
  fetch(request: Request, ...ctx: Partial<TServerContext>[]): Promise<Response> | Response;
  fetch(urlStr: string, ctx: TServerContext): Promise<Response> | Response;
  fetch(urlStr: string, ...ctx: Partial<TServerContext>[]): Promise<Response> | Response;
  fetch(urlStr: string, init: RequestInit, ctx: TServerContext): Promise<Response> | Response;
  fetch(urlStr: string, init: RequestInit, ...ctx: Partial<TServerContext>[]): Promise<Response> | Response;
  fetch(url: URL, ctx: TServerContext): Promise<Response> | Response;
  fetch(url: URL, ...ctx: Partial<TServerContext>[]): Promise<Response> | Response;
  fetch(url: URL, init: RequestInit, ctx: TServerContext): Promise<Response> | Response;
  fetch(url: URL, init: RequestInit, ...ctx: Partial<TServerContext>[]): Promise<Response> | Response;
  /**
   * This function takes Node's request object and returns a WHATWG Fetch spec compliant `Response` object.
   **/
  handleNodeRequest(nodeRequest: NodeRequest, ...ctx: Partial<TServerContext>[]): Promise<Response> | Response;
  /**
   * A request listener function that can be used with any Node server variation.
   */
  requestListener: RequestListener;

  handle(req: NodeRequest, res: NodeResponse, ...ctx: Partial<TServerContext>[]): Promise<void>;
  handle(request: Request, ...ctx: Partial<TServerContext>[]): Promise<Response> | Response;
  handle(fetchEvent: FetchEvent & Partial<TServerContext>, ...ctx: Partial<TServerContext>[]): void;
  handle(
    container: { request: Request } & Partial<TServerContext>,
    ...ctx: Partial<TServerContext>[]
  ): Promise<Response> | Response;
}

export type ServerAdapter<TServerContext, TBaseObject extends ServerAdapterBaseObject<TServerContext>> = TBaseObject &
  ServerAdapterObject<TServerContext, TBaseObject>['handle'] &
  ServerAdapterObject<TServerContext, TBaseObject>;

export type ServerAdapterRequestHandler<TServerContext> = (
  request: Request,
  ctx: TServerContext
) => Promise<Response> | Response;

export type DefaultServerAdapterContext = {
  req: NodeRequest;
  res: NodeResponse;
  waitUntil(promise: Promise<void> | void): void;
};
