/**
 * Newsletter Service — handles form submission
 * 
 * Configure your newsletter provider here.
 * Currently supports: 
 *   - Simulation mode (default)
 *   - Custom API endpoint
 * 
 * To connect to your provider (Mailchimp, ConvertKit, Beehiiv, etc.),
 * update the `NEWSLETTER_CONFIG` below.
 */

const NEWSLETTER_CONFIG = {
  // Set to your API endpoint when ready
  // Example: 'https://api.beehiiv.com/v2/publications/xxx/subscriptions'
  endpoint: '/api/subscribe',

  // HTTP method for the API call
  method: 'POST',

  // Transform the email into the payload your API expects
  // Override this for your specific provider
  buildPayload: (email) => ({ email }),

  // Custom headers (e.g., API keys)
  headers: {
    'Content-Type': 'application/json',
  },

  // Simulated delay in ms (only used when endpoint is null)
  simulatedDelay: 1500,
};

/**
 * Submit an email to the newsletter service
 * @param {string} email - Subscriber's email
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function subscribeEmail(email) {
  // Validation
  if (!email || !isValidEmail(email)) {
    return { success: false, message: 'Correo electrónico inválido.' };
  }

  // If no endpoint configured, run in simulation mode
  if (!NEWSLETTER_CONFIG.endpoint) {
    return simulateSubscription(email);
  }

  // Real API call
  try {
    const response = await fetch(NEWSLETTER_CONFIG.endpoint, {
      method: NEWSLETTER_CONFIG.method,
      headers: NEWSLETTER_CONFIG.headers,
      body: JSON.stringify(NEWSLETTER_CONFIG.buildPayload(email)),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Error de suscripción');
    }

    return { success: true, message: '¡Bienvenido a La Trinchera! Revisa tu correo.' };
  } catch (error) {
    console.error('[Newsletter] Subscription error:', error);
    return { success: false, message: error.message || 'Error al suscribirse. Intenta de nuevo.' };
  }
}

/**
 * Simulation mode for development/demo
 */
async function simulateSubscription(email) {
  await new Promise((resolve) => setTimeout(resolve, NEWSLETTER_CONFIG.simulatedDelay));
  console.log(`[Newsletter] Simulated subscription for: ${email}`);
  return { success: true, message: '¡Bienvenido a La Trinchera! Revisa tu correo.' };
}

/**
 * Basic email validation
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
