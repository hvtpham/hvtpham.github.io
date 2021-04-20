function displayNavigation() {
  document.write("<div id='pagetitle'><h1>Hong Van Pham<\/h1><\/div>");
  document.write("<div id='nav'>");
  document.write("<a href='index.html'>about</a> | <a href='https://goo.gl/3xPVqW' target='_blank'>resume</a> | <a href='portfolio.html'>portfolio</a> | <a href='contact.html'>contact</a>");
  document.write("<\/div>");
}

function highlightSelected(selected) {
  var linkId = "a[href='" + selected + ".html']";
  $(linkId).addClass("selected");
}
