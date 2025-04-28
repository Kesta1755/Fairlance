import { ReactNode, useState, useEffect } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Loading } from "../components/ui/Loading";

// Create a Convex client
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL || "https://fair-mole-123.convex.cloud");

interface ConvexClientProviderProps {
  children: ReactNode;
}

export function ConvexClientProvider({ children }: ConvexClientProviderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initialization delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading message="Connecting to FairLance..." />;
  }

  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
