/**
 * DOM Utilities — helper functions for component rendering
 */

/**
 * Creates an HTML element from a template string and returns it
 * @param {string} html - HTML string to parse
 * @returns {HTMLElement}
 */
export function createElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstChild;
}

/**
 * Mounts a component's HTML into a container
 * @param {HTMLElement} container - Target DOM element
 * @param {string} html - HTML string to insert
 */
export function mount(container, html) {
  container.insertAdjacentHTML('beforeend', html);
}

/**
 * Selects an element within a given scope
 * @param {string} selector
 * @param {HTMLElement} scope
 * @returns {HTMLElement|null}
 */
export function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

/**
 * Selects all matching elements within a given scope
 * @param {string} selector
 * @param {HTMLElement} scope
 * @returns {NodeListOf<HTMLElement>}
 */
export function qsa(selector, scope = document) {
  return scope.querySelectorAll(selector);
}
