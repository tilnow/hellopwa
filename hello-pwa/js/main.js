window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}


document.getElementById("p1").innerHTML = "New text and db!";
var db;
var request = indexedDB.open("library");

request.onupgradeneeded = function() {
  // The database did not previously exist, so create object stores and indexes.
  var db = request.result;
  var store = db.createObjectStore("books", {keyPath: "isbn"});
  var titleIndex = store.createIndex("by_title", "title", {unique: true});
  var authorIndex = store.createIndex("by_author", "author");

  // Populate with initial data.
  store.put({title: "Quarry Memories", author: "Fred", isbn: 123456});
  store.put({title: "Water Buffaloes", author: "Fred", isbn: 234567});
  store.put({title: "Bedrock Nights", author: "Barney", isbn: 345678});
};
request.onerror = function(event) {
    document.getElementById("p1").innerHTML = "we failed";
      // Do something with request.errorCode!
};
request.onsuccess = function() {
  db = request.result;
};
var tx = db.transaction("books", "readonly");
var store = tx.objectStore("books");
var index = store.index("by_title");

var request = index.get("Bedrock Nights");
request.onsuccess = function() {
  var matching = request.result;
  if (matching !== undefined) {
    // A match was found.
    document.getElementById("p1").innerHTML = matching.title+ matching.author;
  } else {
    // No match was found.
    document.getElementById("p1").innerHTML ="oops";
  }
};
