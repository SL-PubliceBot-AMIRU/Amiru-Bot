/* Codded by @Ravindu Manoj


Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj


*/

function successfullMessage(msg) {
    return "🇱🇰 *AMIRU BOT👑*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🥴 *AMIRU BOT👑*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "❄ *AMIRU BOT👑*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
