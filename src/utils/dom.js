/**
 * DOM Utilities — helper functions for component rendering & selection
 */

/**
 * Query selector shorthand
 */
export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

/**
 * Selects an element within a given scope
 */
export function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

/**
 * Selects all matching elements within a given scope
 */
export function qsa(selector, scope = document) {
  return scope.querySelectorAll(selector);
}

/**
 * Creates an HTML element from a template string
 */
export function createElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstChild;
}

/**
 * Mounts HTML into a container
 */
export function mount(container, html) {
  container.insertAdjacentHTML('beforeend', html);
}

/**
 * Check if device is mobile
 */
export function isMobile() {
  return window.innerWidth < 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
