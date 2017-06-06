// ==UserScript==
// @name         Set Youtube Live Events Private
// @namespace    https://github.com/oalca
// @version      0.2
// @description  This script sets automatically the unlisted option on the live events on youtube
// @author       Oscar Alcala
// @match        https://www.youtube.com/my_live_events*
// @grant        none
// @connect       github.com
// @require http://code.jquery.com/jquery-latest.js
// @include https://github.com/*
// @updateURL    https://raw.githubusercontent.com/oscarolar/tamperscripts/master/set_private_live_events_youtube.js
// @downloadURL    https://raw.githubusercontent.com/oscarolar/tamperscripts/master/set_private_live_events_youtube.js
// ==/UserScript==

$(document).ready(function () {
    'use strict';
    var input = $('select[name=privacy]').val('unlisted').change();
});
