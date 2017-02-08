// ==UserScript==
// @name         Separate "Close pull request" button
// @website      http://github.com/osvalr/tamperscripts
// @version      1.0.0
// @description  in github.com "Close pull request" button is taken to the left, hiding markdown text to avoid mistakes when doing a comment in a pull request
// @author       Osval Reyes
// @match        https://github.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @downloadURL  https://github.com/osvalr/tamperscripts/blob/master/separate_close_pull_button.js
// @updateURL    https://github.com/osvalr/tamperscripts/blob/master/separate_close_pull_button.js
// ==/UserScript==

(function(){
    'use strict';
    var button = $("button[name='comment_and_close'").detach();
    button.addClass("float-left");
    $("#partial-new-comment-form-actions").parent().prepend(button);
    $('.tabnav-extra').hide();
})();
