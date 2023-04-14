import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fetch, Headers, Request, Response } from 'cross-fetch';

import { API_TEST } from './src/constants/api';
import { apiResponse } from './src/mock/apiResponse';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

const server = setupServer(
  rest.get(API_TEST.OpenLibraryTest, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(apiResponse));
  }),
  rest.get('*', (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(ctx.status(500), ctx.json({ error: 'Please add request handler ' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

export { rest, server };
