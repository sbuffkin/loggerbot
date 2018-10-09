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
        // tslint:disable-next-line:no-console
        console.log('Custom Activity Log:', activity);
    }
}
exports.CustomLogger = CustomLogger;
