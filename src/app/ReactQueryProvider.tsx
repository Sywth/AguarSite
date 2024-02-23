"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

type ReactQueryClientProps = React.HTMLProps<HTMLDivElement> & {
  children: React.ReactNode;
};

const ReactQueryClient: React.FC<ReactQueryClientProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryClient;
