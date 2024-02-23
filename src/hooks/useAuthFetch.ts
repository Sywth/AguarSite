// "use client";
// import { useAuth } from "@clerk/nextjs";
// import { useEffect } from "react";

// const useAuthFetch = (
//   url: string,
//   callback = (res: Response) => {},
//   requestOptions: RequestInit = {}
// ) => {
//   const { getToken } = useAuth();
//   const { headers, ...requestOptionsProps } = requestOptions;

//   useEffect(() => {
//     const inner = async () => {
//       // No need to manually parse and send the __session cookie; the browser will handle it with credentials: 'include'
//       return fetch(url, {
//         headers: { Authorization: `Bearer ${await getToken()}`, ...headers },
//         // TODO - figure out if this needed, seems like a risk
//         // credentials: "include", // Ensure cookies are sent with the request //
//         ...requestOptionsProps,
//       }).then((res) => callback(res));
//     };
//     inner();
//   }, []);
// };

// export default useAuthFetch;
