// ==UserScript==
// @name         Close Pull request button red
// @namespace    https://github.com/oalca
// @version      0.1
// @description  This script displays in red the button on github comment and close
// @author       Oscar Alcala
// @match        https://github.com/*
// @grant        none
// @connect       github.com
// @require http://code.jquery.com/jquery-latest.js
// @include https://github.com/*
// @updateURL    https://raw.githubusercontent.com/oscarolar/tamperscripts/master/button_danger_close_pr.js
// @downloadURL    https://raw.githubusercontent.com/oscarolar/tamperscripts/master/button_danger_close_pr.js
// ==/UserScript==

(function() {
    'use strict';
    var button = $('button[name="comment_and_close"]').addClass('btn-danger pull-left');
})();
