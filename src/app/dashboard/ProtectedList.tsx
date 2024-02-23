"use client";

import useApiUrl from "@/hooks/useApiUrl";
import { useState } from "react";
import useAuthFetch from "../../hooks/useAuthFetch";

const ProtectedList = () => {
  const [apiResponse, setApiResponse] = useState("");
  const apiUrl = useApiUrl();

  useAuthFetch(`${apiUrl}/protected/dashboard`, async (res) => {
    const data = await res.json();
    setApiResponse(JSON.stringify(data, null, "\t"));
  });

  return <code>{apiResponse}</code>;
};

export default ProtectedList;
