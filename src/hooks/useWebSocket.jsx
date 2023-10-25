import { useEffect } from "react";

function useWebSocket(url, onMessage) {
  useEffect(() => {
    const ws = new WebSocket(url);
    ws.onmessage = onMessage;
    return () => ws.close();
  }, [url, onMessage]);
}

export default useWebSocket;
