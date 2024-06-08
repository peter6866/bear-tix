import axios, { AxiosResponse, AxiosError } from 'axios';
import { useState } from 'react';

interface RequestConfig {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  body?: Record<string, any>;
  onSuccess?: (data: any) => void;
}

interface ErrorResponse {
  message: string;
  field?: string;
}

const useRequest = ({ url, method, body, onSuccess }: RequestConfig) => {
  const [errors, setErrors] = useState<JSX.Element | null>(null);

  const doRequest = async (props: Record<string, any> = {}): Promise<any> => {
    try {
      setErrors(null);
      const response: AxiosResponse = await axios[method](url, {
        ...body,
        ...props,
      });
      if (onSuccess) {
        onSuccess(response.data as any);
      }
      return response.data as any;
    } catch (error) {
      const typedError = error as AxiosError;
      const errorResponse = typedError.response?.data as any;
      setErrors(
        <div className="alert alert-danger">
          <h4>Ooops....</h4>
          <ul className="my-0">
            {errorResponse.errors.map((err: ErrorResponse) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};

export default useRequest;
