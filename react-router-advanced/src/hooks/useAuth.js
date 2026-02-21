// src/hooks/useAuth.js
import { useState } from "react";

export default function useAuth() {
  // Simulated authentication state
  const [user] = useState({ name: "Dzifa" });
  // change to null to simulate logout

  return {
    user,
    isAuthenticated: !!user
  };
}