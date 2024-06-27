const authFetch = (
  url: string,
  clerkToken: string,
  requestOptions: RequestInit = {}
) => {
  const { headers, ...requestOptionsProps } = requestOptions;
  return fetch(url, {
    headers: { Authorization: `Bearer ${clerkToken}`, ...headers },
    ...requestOptionsProps,
  });
};

export { authFetch };
