/**
 * Licensed under the MIT License.
 */
const fs = require('fs');
const util = require('util');
/**
 * CustomLogger.
 */
class CustomLogger {
    /**
     * Log an activity to the transcript.
     * @param activity Activity being logged.
     */
    logActivity(activity) {
        if (!activity) {
            throw new Error('Activity is required.');
        }
        if (activity.conversation) {
            var logText = util.format('\n Activity Recieved: %s \n', util.inspect(activity));
            var logfileName = util.format('./logs/log_%s.txt', activity.conversation.id);
            // tslint:disable-next-line:no-console
            console.log(logText);
            fs.appendFile(logfileName, logText, function(err) {
                if (err) throw err;
            });
        }
    }
}
exports.CustomLogger = CustomLogger;
