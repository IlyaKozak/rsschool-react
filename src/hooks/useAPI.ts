import { useCallback, useState } from 'react';

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
          throw new Error('Request failed!');
        }

        const data = await response.json();
        callback(data);
      } catch (error) {
        if (!(error instanceof Error)) return;
        setError(error.message || 'Something went wrong!');
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
