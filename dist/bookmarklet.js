'use strict';

(function () {
    var knownTags = ['address', 'article', 'aside', 'footer', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'nav', 'section', 'dd', 'div', 'dl', 'dt', 'figcaption', 'figure', 'hr', 'li', 'main', 'ol', 'p', 'pre', 'ul', 'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'dfn', 'em', 'i', 'kbd', 'mark', 'q', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr', 'caption', 'col', 'colgroup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'button', 'datalist', 'fieldset', 'form', 'input', 'label', 'legend', 'meter', 'optgroup', 'option', 'output', 'progress', 'select', 'textarea'];

    var notCss = knownTags.map(function (tag) {
        return ':not( ' + tag + ' )';
    }).join('');
    var nodes = document.querySelectorAll('body ' + notCss);

    var nodesArray = Array.prototype.slice.call(nodes);

    nodesArray.map(function (node) {
        var outer = document.createElement('div');
        outer.className = 'debug-wrapper';
        var inner = document.createElement('div');
        inner.innerHTML = node.nodeName.toLowerCase();
        inner.className = 'debug-component';

        node.prepend(outer);
        outer.appendChild(inner);
    });

    var rules = ['\n  .debug-wrapper {\n      position: relative;\n  }', '\n  .debug-component {\n      position: absolute;\n      right: 0;\n      z-index: 777;\n      color: lightgray;\n      font-size: 8px;\n  }', '\n  .debug-component:hover {\n      color: black;\n      background-color: lightgray;\n      font-size: 12px;\n      padding: 0.2em;\n  }'];

    var sheet = window.document.styleSheets[0];
    rules.map(function (rule) {
        return sheet.insertRule(rule, sheet.cssRules && sheet.cssRules.length || 0);
    });
})();

