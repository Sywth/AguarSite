const currentStreams = new Set<string>();

const streamData = async (
  url: string,
  getRequestInit: () => Promise<RequestInit | undefined>,
  callback: (chunk_value: Uint8Array) => void,
  onStart: () => void,
  onEnd: () => void,
  streamId: string
) => {
  const cleanUpLogic = () => {
    currentStreams.delete(streamId);
  };

  const fetchThenProcess = async () => {
    if (currentStreams.has(streamId)) {
      return;
    }
    currentStreams.add(streamId);

    let response: Response | null = null;
    response = await fetch(url, await getRequestInit());
    if (!response.ok) {
      return;
    }

    if (response.body === null) {
      throw new Error("No response body, could not stream data.");
    }
    const reader = response.body.getReader();

    while (true) {
      const chunk = await reader.read();
      if (chunk.done) {
        break;
      }
      callback(chunk.value);
    }
    currentStreams.delete(streamId);
  };

  const safeFetchThenProcess = async () => {
    onStart();
    try {
      await fetchThenProcess();
    } catch (error) {
      console.warn("Error streaming data :", error);
    } finally {
      cleanUpLogic();
    }
    onEnd();
  };

  safeFetchThenProcess();
  cleanUpLogic();
};

export { streamData };
