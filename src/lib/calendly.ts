/**
 * Opens the MGH Tech Calendly booking page for discovery calls
 * @param {string} [source] - Optional parameter to track where the booking came from
 */
export const openCalendlyBooking = (source?: string) => {
  const calendlyUrl = "https://calendly.com/dev-mghtech/discovery-call?month=2025-10";
  
  // Add source tracking if provided
  const url = source ? `${calendlyUrl}&utm_source=${source}` : calendlyUrl;
  
  // Navigate in the same window
  window.location.href = url;
};

