import { uuid } from "uuidv4";
import { useEffect, useRef } from "react";

const currentStreams = new Set<string>();

const useStream = (
  url: string,
  getRequestInit: () => Promise<RequestInit | undefined>,
  callback: (chunk_value: Uint8Array) => void,
  onStart: () => void,
  onEnd: () => void,
  streamId: string
) => {
  const response = useRef<Response | null>(null);
  const reader = useRef<ReadableStreamDefaultReader<Uint8Array> | null>(null);

  const cleanUpLogic = () => {
    currentStreams.delete(streamId);
    onEnd();
  };

  const fetchThenProcess = async () => {
    if (currentStreams.has(streamId)) {
      return;
    }
    currentStreams.add(streamId);
    response.current = await fetch(url, await getRequestInit());
    if (response.current.body === null) {
      throw new Error("No response body, could not stream data.");
    }
    reader.current = response.current.body.getReader();

    while (true) {
      const chunk = await reader.current.read();
      if (chunk.done) {
        break;
      }
      callback(chunk.value);
    }
    currentStreams.delete(streamId);
    cleanUpLogic();
  };

  useEffect(() => {
    onStart();
    fetchThenProcess();

    return cleanUpLogic;
  }, [streamId]);
};

export { useStream };
