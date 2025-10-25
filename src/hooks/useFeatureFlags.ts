import { isFeatureEnabled } from '@/services/featureFlags';

/**
 * Hook to check if a feature flag is enabled
 * @param flagName - The name of the feature flag to check
 * @returns boolean - Whether the feature is enabled
 */
export const useFeatureFlag = (flagName: string): boolean => {
  return isFeatureEnabled(flagName);
};

