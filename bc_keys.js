"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Review Assignment

   Author: 
   Date:   

   Filename: bc_keys.js

   Functions
   =========
   
   findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.
      
   makeKeyStyles()
      Create an embedded style sheet for the keyword box.

      
   replaceWS(textStr)
      Replaces occurences of one or more consecutive white space
      characters with the _ character.

*/


function findKeyWords() {
   // Create Aside Element for the Keyword List
  var keyWordBox = document.createElement("aside");
   keyWordBox.setAttribute("id", "keywords");
   var keyWordTitle = document.createElement("h1");
   keyWordTitle.innerHTML = "Keyword List";
   keyWordBox.appendChild(keyWordTitle);
   
   // Place the keywords in an ordered list
   var keyWordList = document.createElement("ol");
   keyWordBox.appendChild(keyWordList);
   
   // Locate all of the keywords in the source document
   var keyWordElems = document.querySelectorAll("article#doc dfn");
   var keyWords = new Array(keyWordElems.length);
   for (var i = 0; i < keyWordElems.length; i++) {
      keyWords[i] = keyWordElems[i].textContent;
      var linkID = replaceWS(keyWords[i]);
      keyWordElems[i].setAttribute("id", "keyword_" + linkID);
   }
   
   // Sort the keywords in alphabetical order
   keyWords.sort();
   
   for (var i = 0; i < keyWords.length; i++) {
      var keyWordListItem = document.createElement("li");
      var keyWordLink = document.createElement("a");
      keyWordLink.innerHTML = keyWords[i];
      var linkID = replaceWS(keyWords[i]);
      keyWordLink.setAttribute("href", "#" + "keyword_" + linkID);
      keyWordListItem.appendChild(keyWordLink);
      keyWordList.appendChild(keyWordListItem);
   }
   
   // Append the keyword box to the document
   var historyDoc = document.getElementById("doc");
   historyDoc.insertBefore(keyWordBox, historyDoc.firstChild);    
}

function makeKeyStyles() {
  // Create a link element for the page view styles
  var pageStyle = document.createElement("link");
  pageStyle.setAttribute("href", "bc_keys.css");
  pageStyle.setAttribute("rel", "stylesheet");

  // Append the link element to the document head
  document.head.appendChild(pageStyle);
 
  document.styleSheets[document.styleSheets.length-1].insertRule( 
  "aside#keywords { \
     border: 3px solid rgb(101, 101, 101); \
     float: right; \
     margin: 20px 0px 20px 20px; \
     padding: 10px; \
     width: 320px; \
}", 1);

 document.styleSheets[document.styleSheets.length-1].insertRule(
"aside#keywords h1 { \
     font-size: 2em; \
     margin: 5px; \
     text-align: center; \
}", 1);

 document.styleSheets[document.styleSheets.length-1].insertRule(
"aside#keywords ol { \
     margin-left: 20px; \
     font-size: 1.2em; \
}", 1);

 document.styleSheets[document.styleSheets.length-1].insertRule(
"aside#keywords ol li { \
     line-height: 1.5em; \
}", 1);

 document.styleSheets[document.styleSheets.length-1].insertRule(
"aside#keywords ol li a { \
     color: rgb(101, 101, 101); \
     text-decoration: none; \
}", 1);

}

window.addEventListener('load', findKeyWords);
window.addEventListener('load', makeKeyStyles);

/* Supplied Functions */
function replaceWS(textStr) {

var revText = textStr.replace(/\s+/g,"_");

return revText;

}

