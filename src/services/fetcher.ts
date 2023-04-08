const PROTOCOL = import.meta.env.VITE_API_PROTOCOL || 'http';
const PORT = import.meta.env.VITE_API_PORT || 3001;
const HOST = import.meta.env.VITE_API_HOST || 'localhost';

/**
 * Wrapper of default fetch function
 * @param url API route, with slash at the beggining
 * @param options default fetch options object
 * @returns Promise of json
 */
const fetcher = <TResponse>(url: string, options?: RequestInit | undefined) => {
  return fetch(`${PROTOCOL}://${HOST}:${PORT}`, options)
    .then((res) => res.json())
    .then((data) => data as TResponse);
};

export default fetcher;
