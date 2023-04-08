import { act, renderHook } from '@testing-library/react';

import { API, ERROR } from '../constants/constants';
import { apiResponse } from '../mock/apiResponse';
import useAPI from './useAPI';
import { server, rest } from '../../testServer';

describe('useAPI custom hook', () => {
  it('returns response object for correct query', async () => {
    const { result } = renderHook(() => useAPI());
    const { sendRequest } = result.current;

    let response;

    await act(async () => {
      await sendRequest(
        {
          url: API.OpenLibraryTest,
        },
        (data) => {
          response = data;
        }
      );
    });

    expect(response).toEqual(apiResponse);
  });

  it('handles failure', async () => {
    const { result } = renderHook(() => useAPI());
    const { sendRequest } = result.current;

    server.use(
      rest.get(API.IncorrectUrl, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    await act(async () => {
      await sendRequest(
        {
          url: API.IncorrectUrl,
        },
        () => {}
      );
    });

    expect(result.current.error).toEqual(ERROR.BAD_REQUEST);
  });
});
