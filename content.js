(function () {
  "use strict";
  const CODE_REGEX = /\b(?=[a-zA-Z0-9]*[a-zA-Z])(?=[a-zA-Z0-9]*[0-9])[a-zA-Z0-9]{5,20}\b/g;
  const CONTENT_SELECTORS = [
    ".writing_view_box",
    ".view_content_wrap",
    ".write_div",
    ".thum-txtin",
    "#container .gallview_contents"
  ];

  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.nodeValue;
      if (!text || !CODE_REGEX.test(text)) return;
      CODE_REGEX.lastIndex = 0;
      const fragment = document.createDocumentFragment();
      let lastIndex = 0;
      let match;
      while ((match = CODE_REGEX.exec(text)) !== null) {
        if (match.index > lastIndex) {
          fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
        }
        const code = match[0];
        const link = document.createElement("a");
        link.href = "https://rentry.co/" + code;
        link.textContent = code;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.className = "dc-rentry-linker__link";
        fragment.appendChild(link);
        lastIndex = CODE_REGEX.lastIndex;
      }
      if (lastIndex < text.length) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
      }
      if (node.parentNode) node.parentNode.replaceChild(fragment, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (["A", "SCRIPT", "STYLE", "TEXTAREA", "INPUT", "CODE", "PRE"].includes(node.tagName)) return;
      Array.from(node.childNodes).forEach(processNode);
    }
  }

  function processContent() {
    CONTENT_SELECTORS.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (el) {
        if (el.dataset.rentryProcessed) return;
        el.dataset.rentryProcessed = "true";
        processNode(el);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", processContent);
  } else {
    processContent();
  }
  new MutationObserver(processContent).observe(document.body, { childList: true, subtree: true });
})();
