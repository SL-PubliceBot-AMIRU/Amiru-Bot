/* Coded By AMIRU BOT.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Amiru bot

*/

function successfullMessage(msg) {
    return "🇱🇰 *AmiruBot*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🥴 *AmiruBot*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "🐲 *AmiruBot*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
