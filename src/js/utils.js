/**
 * Object, representing specification of HTML element
 * @typedef {Object} Specification
 * @property {string} [tagName]
 * @property {string} [className]
 * @property {string} [title]
 * @property {Object.<string, string|null>} [style]
 * @property {EventListener} [onclick]
 * @property {Content} [content]
 */

/**
 * @typedef {(string|Specification|Specification[])} Content
 */

/**
 * Updates element to match specification
 * @returns {HTMLElement}
 * @param {HTMLElement} target
 * @param {Specification} tree
 */
export default function render(target, tree) {
    if (tree.className && target.className !== tree.className) {
        target.className = tree.className;
    }
    if (tree.title && target.title !== tree.title) {
        target.title = tree.title;
    }
    if (tree.onclick) {
        // overwriting, just as planned
        target.onclick = tree.onclick;
    }
    if (tree.style) {
        for (const [property, value] of Object.entries(tree.style)) {
            target.style.setProperty(property, value);
        }
        Object.assign(target.style, tree.style);
    }
    if (!tree.content) {
        return target;
    }
    if (typeof tree.content === "string" && target.innerText !== tree.content) {
        target.innerText = tree.content;
        return target;
    }
    if (target.childNodes.length !== 0) {
        target.innerHTML = '';
    }
    for (let element of Array.isArray(tree.content) ? tree.content : [tree.content]) {
        target.appendChild(render(document.createElement(element.tagName), element));
    }
    return target;
}
