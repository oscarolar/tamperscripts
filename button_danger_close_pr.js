// ==UserScript==
// @name         Close Pull request button red
// @namespace    https://github.com/oalca
// @version      0.1
// @description  This script displays in red the button on github comment and close
// @author       Oscar Alcala
// @match        https://github.com/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// @include https://github.com/*
// ==/UserScript==

(function() {
    'use strict';
    var button = $('button[name="comment_and_close"]').addClass('btn-danger pull-left');
})();
