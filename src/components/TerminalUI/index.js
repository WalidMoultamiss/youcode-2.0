export const terminalUI = () => {

    console.log('qsd');

  window.update = (text) => {
    let result_element = document.querySelector("#highlighting-content");
    // Handle final newlines (see article)
    if (text[text.length - 1] == "\n") {
      text += " ";
    }
    // Update code
    result_element.innerHTML = text
      .replace(new RegExp("&", "g"), "&amp;")
      .replace(new RegExp("<", "g"), "&lt;"); /* Global RegExp */
    // Syntax Highlight
    Prism.highlightElement(result_element);
  };
  window.sync_scroll = (element) => {
    /* Scroll result to scroll coords of event - sync with textarea */
    let result_element = document.querySelector("#highlighting");
    // Get and set x and y
    result_element.scrollTop = element.scrollTop;
    result_element.scrollLeft = element.scrollLeft;
  };

  window.check_tab = (element, event) => {
    let code = element.value;
    if (event.key == "Tab") {
      /* Tab key pressed */
      event.preventDefault(); // stop normal
      let before_tab = code.slice(0, element.selectionStart); // text before tab
      let after_tab = code.slice(element.selectionEnd, element.value.length); // text after tab
      let cursor_pos = element.selectionEnd + 1; // where cursor moves after tab - moving forward by 1 char to after tab
      element.value = before_tab + "\t" + after_tab; // add tab char
      // move cursor
      element.selectionStart = cursor_pos;
      element.selectionEnd = cursor_pos;
      update(element.value); // Update text to include indent
    }
  };
  return `
<style>
    /* Please see the article */

#editing, #highlighting {
  /* Both elements need the same text and space styling so they are directly on top of each other */
  margin: 10px;
  padding: 10px;
  border: 0;
  width: calc(100% - 32px);
  height: 150px;
}
#editing, #highlighting, #highlighting * {
  /* Also add text styles to highlighing tokens */
  font-size: 15pt;
  font-family: monospace;
  line-height: 20pt;
  tab-size: 2;
}


#editing, #highlighting {
  /* In the same place */
  position: absolute;
  top: 0;
  left: 0;
}


/* Move the textarea in front of the result */

#editing {
  z-index: 1;
}
#highlighting {
  z-index: 0;
}


/* Make textarea almost completely transparent */

#editing {
  color: transparent;
  background: transparent;
  caret-color: white; /* Or choose your favourite color */
}

/* Can be scrolled */
#editing, #highlighting {
  overflow: auto;
  white-space: nowrap; /* Allows textarea to scroll horizontally */
}

/* No resize on textarea */
#editing {
  resize: none;
}

/* Paragraphs; First Image */
* {
  font-family: "Fira Code", monospace;
}
p code {
  border-radius: 2px;
  background-color: #eee;
  color: #111;
}


/* Syntax Highlighting from prism.js starts below, partly modified: */

/* PrismJS 1.23.0
https://prismjs.com/download.html#themes=prism-funky&languages=markup */
/**
 * prism.js Funky theme
 * Based on “Polyfilling the gaps” talk slides http://lea.verou.me/polyfilling-the-gaps/
 * @author Lea Verou
 */

code[class*="language-"],
pre[class*="language-"] {
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
	padding: .4em .8em;
	margin: .5em 0;
	overflow: auto;
	/* background: url('data:image/svg+xml;charset=utf-8,<svg%20version%3D"1.1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"100"%20height%3D"100"%20fill%3D"rgba(0%2C0%2C0%2C.2)">%0D%0A<polygon%20points%3D"0%2C50%2050%2C0%200%2C0"%20%2F>%0D%0A<polygon%20points%3D"0%2C100%2050%2C100%20100%2C50%20100%2C0"%20%2F>%0D%0A<%2Fsvg>');
	background-size: 1em 1em; - WebCoder49*/
  background: black; /* - WebCoder49 */
}

code[class*="language-"] {
	background: black;
	color: white;
	box-shadow: -.3em 0 0 .3em black, .3em 0 0 .3em black;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .2em;
	border-radius: .3em;
	box-shadow: none;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #aaa;
}

.token.punctuation {
	color: #999;
}

.token.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol {
	color: #0cf;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin {
	color: yellow;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.token.variable,
.token.inserted {
	color: yellowgreen;
}

.token.atrule,
.token.attr-value,
.token.keyword {
	color: deeppink;
}

.token.regex,
.token.important {
	color: orange;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

.token.deleted {
	color: red;
}

/* Plugin styles: Diff Highlight */
pre.diff-highlight.diff-highlight > code .token.deleted:not(.prefix),
pre > code.diff-highlight.diff-highlight .token.deleted:not(.prefix) {
	background-color: rgba(255, 0, 0, .3);
	display: inline;
}

pre.diff-highlight.diff-highlight > code .token.inserted:not(.prefix),
pre > code.diff-highlight.diff-highlight .token.inserted:not(.prefix) {
	background-color: rgba(0, 255, 128, .3);
	display: inline;
}

/* End of prism.js syntax highlighting*/
</style>
<div style="height: 200px;" >
<textarea placeholder="Enter HTML Source Code" id="editing" spellcheck="false" oninput="update(this.value); sync_scroll(this);" onscroll="sync_scroll(this);" onkeydown="check_tab(this, event);"></textarea>
<pre id="highlighting" aria-hidden="true">
<code class="language-html" id="highlighting-content">
</code>

    `;
};
