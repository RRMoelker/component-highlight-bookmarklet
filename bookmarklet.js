(function(){
  const knownTags = ['address', 'article', 'aside', 'footer', 'h1','h2','h3','h4','h5','h6', 'header', 'hgroup', 'nav', 'section', 'dd', 'div', 'dl', 'dt', 'figcaption', 'figure', 'hr', 'li', 'main', 'ol', 'p', 'pre', 'ul', 'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'dfn', 'em', 'i', 'kbd', 'mark', 'q', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr','caption', 'col', 'colgroup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'button', 'datalist', 'fieldset', 'form', 'input', 'label', 'legend', 'meter', 'optgroup', 'option', 'output', 'progress', 'select', 'textarea' ];

  const notCss = knownTags.map(tag => `:not( ${ tag } )`).join('');
  const nodes = document.querySelectorAll(`body ${ notCss }`);

  const nodesArray = Array.prototype.slice.call(nodes);

  nodesArray.map( node => {
    const outer = document.createElement('div');
    outer.className='debug-wrapper';
    const inner = document.createElement('div');
    inner.innerHTML = node.nodeName.toLowerCase();
    inner.className='debug-component';

    node.prepend(outer);
    outer.appendChild(inner);
  });

  const rules = [`
  .debug-wrapper {
      position: relative;
  }`,`
  .debug-component {
      position: absolute;
      right: 0;
      color: lightgray;
      font-size: 8px;
  }`,`
  .debug-component:hover {
      color: black;
      background-color: lightgray;
      font-size: 12px;
      padding: 0.2em;
  }`];

  const sheet = window.document.styleSheets[0];
  rules.map(rule => sheet.insertRule(rule, sheet.cssRules.length) );  
})();
