import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { isFeatureEnabled } from "@/services/featureFlags";

interface ProtectedRouteProps {
  children: ReactNode;
  featureFlag: string;
  redirectTo?: string;
}

/**
 * Protected Route Component
 * Redirects to 404 or specified route if feature flag is disabled
 */
const ProtectedRoute = ({ children, featureFlag, redirectTo = "*" }: ProtectedRouteProps) => {
  const isEnabled = isFeatureEnabled(featureFlag);
  
  if (!isEnabled) {
    return <Navigate to={redirectTo} replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;

