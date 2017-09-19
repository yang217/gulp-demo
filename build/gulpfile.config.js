E 10-
  padding: 0; // 2. Remove the padding in IE 10-
}


input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  // Remove the default appearance of temporal inputs to avoid a Mobile Safari
  // bug where setting a custom line-height prevents text from being vertically
  // centered within the input.
  // See https://bugs.webkit.org/show_bug.cgi?id=139848
  // and https://github.com/twbs/bootstrap/issues/11266
  -webkit-appearance: listbox;
}

textarea {
  overflow: auto; // Remove the default vertical scrollbar in IE.
  // Textareas should really only resize vertically so they don't break their (horizontal) containers.
  resize: vertical;
}

fieldset {
  // Browsers set a default `min-width: min-content;` on fieldsets,
  // unlike e.g. `<div>`s, which have `min-width: 0;` by default.
  // So we reset that to ensure fieldsets behave more like a standard block element.
  // See https://github.com/twbs/bootstrap/issues/12359
  // and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements
  min-width: 0;
  // Reset the default outline behavior of fieldsets so they don't affect page layout.
  padding: 0;
  margin: 0;
  border: 0;
}

// 1. Correct the text wrapping in Edge and IE.
// 2. Correct the color inheritance from `fieldset` elements in IE.
legend {
  display: 