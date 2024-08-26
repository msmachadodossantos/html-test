"use strict";
// Log the window's width and height.
// TODO: Remove this function call in the production environment.
console.log("Resolution: ".concat(window.innerWidth) + " / ".concat(window.innerHeight, " pixels"));
/**
 * Retrieves a list of HTMLElements with the specified data attribute for
 * tooltip triggering.
 * @type {NodeListOf<HTMLElement>} tooltipTriggerList
 */
var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
/**
 * Converts the tooltipTriggerList to an array and maps each element to a new
 * Bootstrap Tooltip instance.
 * @type {Array<any>} tooltipList
 */
var tooltipList = Array.from(tooltipTriggerList).map(function (tooltipTriggerEl) { return new window.bootstrap.Tooltip(tooltipTriggerEl); });
/**
 * Retrieves a list of HTMLElements with the specified data attribute for
 * popover triggering.
 * @type {NodeListOf<HTMLElement>} popoverTriggerList
 */
var popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
/**
 * Converts the popoverTriggerList to an array and maps each element to a new
 * Bootstrap Popover instance.
 * @type {Array<any>} popoverList
 */
var popoverList = Array.from(popoverTriggerList).map(function (popoverTriggerEl) { return new window.bootstrap.Popover(popoverTriggerEl); });
/**
 * Updates the character count of a given field and optionally updates a
 * corresponding display field.
 *
 * @param {HTMLInputElement | HTMLTextAreaElement} field - The input or
 * textarea element to update.
 * @param {string} [opt_countBody="countBody"] - The ID of the element
 * displaying the character count.
 * @param {number} [opt_maxSize=144] - The maximum allowed size of characters.
 * @returns {void}
 */
function counterUpdate(field, opt_countBody, opt_maxSize) {
    if (opt_countBody === void 0) { opt_countBody = "countBody"; }
    if (opt_maxSize === void 0) { opt_maxSize = 144; }
    if (field && field.value.length >= opt_maxSize) {
        field.value = field.value.substring(0, opt_maxSize);
    }
    var txtField = document.getElementById(opt_countBody);
    if (txtField) {
        txtField.innerHTML = field.value.length.toString();
    }
}
/**
 * @deprecated This function is deprecated in favor of the more comprehensive
 * `schema-rio` functionality. For usage and support details, please refer to
 * the `schema-rio` vendor documentation. This function remains available for
 * projects that cannot import `schema-rio`.
 *
 * Ensures that only numeric characters are allowed in the input field.
 * @param {Event} event - The event object.
 * @returns {void}
 */
function onlyNumbers(event) {
    var input = event.target;
    var inputValue = input.value;
    // Remove any non-numeric characters
    input.value = inputValue.replace(/[^0-9]/g, "");
}
