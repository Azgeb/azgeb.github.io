"use strict";

// ====================== //
// = Copyright (c) Azgeb = //
// ====================== //

// Logic
var content = document.getElementById('content');

function setMarkdown(site) {
    var newContent = document.createElement("zero-md");
    newContent.setAttribute("src", "./assets/" + site);
    newContent.setAttribute("id", "content");
    content.replaceWith(newContent);
    content = newContent
}