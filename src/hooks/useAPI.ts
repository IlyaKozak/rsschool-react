import { useCallback, useState } from 'react';

import { ERROR } from '../constants/constants';
import { callbackType, requestConfigType } from '../types/api';

const useAPI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(
    async (requestConfig: requestConfigType, callback: callbackType) => {
      const { url, method, headers, body } = requestConfig;
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          method: method ? method : 'GET',
          headers: headers ? headers : {},
          body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
          throw new Error(ERROR.BAD_REQUEST);
        }

        const data = await response.json();
        callback(data);
      } catch (err) {
        let message = ERROR.MESSAGE;
        if (err instanceof Error) {
          message = err.message;
        }
        setError(message);
      }
      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useAPI;
