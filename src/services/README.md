# Feature Flags Service

Simple and centralized feature flag management for the MGH Tech website.

## How to Use

### Toggle Features On/Off

Open `src/services/featureFlags.ts` and change the boolean values:

```typescript
const featureFlags: FeatureFlags = {
  sections: {
    offerBanner: true,        // Show/hide coffee chat banner
    hero: true,               // Show/hide hero section
    services: true,           // Show/hide services section
    clients: true,            // Show/hide clients section
    solutions: true,          // Show/hide solutions section
    reviews: true,            // Show/hide reviews section
    interactiveQuestionnaire: false,  // Currently disabled
    blog: false,              // Show/hide blog features + BLOCKS ROUTES
    floatingChatButton: true, // Show/hide floating chat button
  },
  features: {
    languageSwitcher: true,   // Show/hide language switcher
    darkMode: false,          // Enable dark mode (not implemented yet)
    analytics: false,         // Enable analytics (not implemented yet)
    socialMedia: false,       // Show/hide social media icons in footer
  },
};
```

### In Components

```typescript
import { useFeatureFlag } from "@/hooks/useFeatureFlags";

const MyComponent = () => {
  const showMySection = useFeatureFlag("sectionName");
  
  if (!showMySection) return null;
  
  return <div>My Section Content</div>;
};
```

### Direct Service Access

```typescript
import { isFeatureEnabled, getAllFeatureFlags } from "@/services/featureFlags";

// Check a single flag
if (isFeatureEnabled("offerBanner")) {
  // Do something
}

// Get all flags
const flags = getAllFeatureFlags();
```

## Route Protection

Feature flags automatically protect routes and hide navigation links:

### Blog Feature (`blog: false`)
- ❌ Blocks `/blog` and `/blog/:slug` routes (redirects to 404)
- ❌ Hides "Blog" link in header navigation
- ❌ Hides "Blog" link in footer
- ✅ Keeps other routes accessible

**Controlled Files:**
- `src/App.tsx` - Route protection via `<ProtectedRoute>`
- `src/components/Header.tsx` - Navigation visibility
- `src/components/Footer.tsx` - Footer link visibility

## Benefits

✅ Simple TypeScript file - easy to read and modify  
✅ Type-safe with TypeScript interfaces  
✅ Centralized configuration  
✅ **Route protection** - Blocks access to disabled pages  
✅ **Navigation hiding** - Removes links to disabled sections  
✅ Console warnings for missing flags  
✅ No need to restart dev server - just refresh browser

