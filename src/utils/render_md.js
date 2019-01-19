// Helper setCSS function
export function setCSS(element, options) {
  for (let prop in options) {
    element.style[prop] = options[prop];
  }
}

// Import marked
const marked = require('marked');

// Make custom renderer
const renderer = new marked.Renderer();

renderer.blockquote = function(quote) {
  const quoteBlock = document.createElement('div');
  quoteBlock.innerHTML = quote;
  setCSS(quoteBlock, {
    color : '#1a775e',
    borderLeft : '3px solid #1a775e',
    paddingLeft : '0.5rem',
    marginLeft : '1rem'
  });
  return quoteBlock.outerHTML;
}

renderer.codespan = function(code) {
  const codeSpan = document.createElement('span');
  codeSpan.innerHTML = code;
  setCSS(codeSpan, {
    backgroundColor : 'white',
    fontFamily : 'monospace',
    padding : '0 0.4rem'
  });
  return codeSpan.outerHTML;
}

renderer.tablecell = function(content, flags) {
  const wrap = document.createElement('td');
  wrap.innerHTML = content;
  setCSS(wrap, {
    border : '2px solid #1a775e',
    padding : '0 0.4rem'
  });

  if (flags.header) {
    setCSS(wrap, {
      textAlign : 'center',
      fontWeight : 'bold'
    });
  }

  return wrap.outerHTML;
}

renderer.table = function(header, body) {
  const wrap = document.createElement('table');
  wrap.innerHTML = header + body;
  setCSS(wrap, {
    borderCollapse : 'collapse'
  });

  return wrap.outerHTML;
}

renderer.link = function(href, title, text) {
  return `<a href=${href} alt=${title} target="_blank">${text}</a>`;
}

// Set options to parse GitHub flavored MD
marked.setOptions({
  renderer : renderer,
  highlight : function(code) {
    const codeBlock = document.createElement('div');
    codeBlock.innerHTML = code;
    setCSS(codeBlock, {
      backgroundColor : 'white',
      padding : '0.4rem'
    })
    codeBlock.style.backgroundColor = 'white';
    return codeBlock.outerHTML;
  },
  breaks : true,
  smartLists : true
});

// Render Markdown as HTML
export function renderMD(markdownText) {
  return marked(markdownText);
}
