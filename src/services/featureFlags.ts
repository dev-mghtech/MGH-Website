/**
 * Feature Flags Service
 * 
 * Centralized control for enabling/disabling features and sections across the site.
 * Simply toggle the boolean values to show/hide features.
 */

export interface FeatureFlags {
  sections: {
    offerBanner: boolean;
    hero: boolean;
    services: boolean;
    clients: boolean;
    solutions: boolean;
    reviews: boolean;
    interactiveQuestionnaire: boolean;
    blog: boolean;
    floatingChatButton: boolean;
  };
  features: {
    languageSwitcher: boolean;
    darkMode: boolean;
    analytics: boolean;
  };
}

// ===== FEATURE FLAGS CONFIGURATION =====
// Change these values to enable/disable features
const featureFlags: FeatureFlags = {
  sections: {
    offerBanner: true,
    hero: true,
    services: true,
    clients: true,
    solutions: true,
    reviews: true,
    interactiveQuestionnaire: false,
    blog: false,
    floatingChatButton: true,
  },
  features: {
    languageSwitcher: true,
    darkMode: false,
    analytics: false,
  },
};
// ========================================

/**
 * Check if a feature flag is enabled
 */
export const isFeatureEnabled = (flagName: string): boolean => {
  // Check in sections first
  if (flagName in featureFlags.sections) {
    return featureFlags.sections[flagName as keyof typeof featureFlags.sections];
  }
  
  // Then check in features
  if (flagName in featureFlags.features) {
    return featureFlags.features[flagName as keyof typeof featureFlags.features];
  }
  
  // Default to false if flag doesn't exist
  console.warn(`Feature flag "${flagName}" not found. Defaulting to false.`);
  return false;
};

/**
 * Get all feature flags
 */
export const getAllFeatureFlags = (): FeatureFlags => {
  return featureFlags;
};

/**
 * Get section flags only
 */
export const getSectionFlags = () => {
  return featureFlags.sections;
};

/**
 * Get feature flags only
 */
export const getFeatureFlags = () => {
  return featureFlags.features;
};

