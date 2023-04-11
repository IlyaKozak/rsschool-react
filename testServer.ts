import 'whatwg-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { API } from './src/constants/constants';
import { apiResponse } from './src/mock/apiResponse';

const server = setupServer(
  rest.get(API.OpenLibraryTest, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(apiResponse));
  }),
  rest.get('*', (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(ctx.status(500), ctx.json({ error: 'Please add request handler ' }));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { rest, server };
