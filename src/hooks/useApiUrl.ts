import { useMemo } from "react";

const useApiUrl = () => {
  const apiUrl = useMemo(
    () =>
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_PROD_API_URL
        : process.env.NEXT_PUBLIC_DEV_API_URL,
    []
  ) as string;
  return apiUrl;
};

export default useApiUrl;
