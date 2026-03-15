/* Feature Request - https://github.com/minbrowser/min/issues/2673 */

/*
*   Initially, this is being implemented like focusMode.
*   However, due to the nature of this feature, it's not transient in nature like focusMode.
*   Instead, it's a persistent setting that follows the user with their preferences.
*   Given that, it should be implemented in a more modular way, theoretically.
*   But we don't necessarily need to worry about that for MVP version.
*/

var settings = require('util/settings/settings.js')

var isTaskManagementEnabled = false
const CSS_TASK_MANAGEMENT_DISABLED_CLASS = 'is-task-management-disabled'

settings.listen('taskManagementEnabled', function(value) {
  console.log('Listen for task management flag changes -> enabled=' + value)
  isTaskManagementEnabled = value

  if (!isTaskManagementEnabled) {
    document.body.classList.add(CSS_TASK_MANAGEMENT_DISABLED_CLASS)
  } else {
    document.body.classList.remove(CSS_TASK_MANAGEMENT_DISABLED_CLASS)
  }
})

module.exports = {
  enabled: function() {
    console.log('Check if task management enabled -> isEnabled=' + isTaskManagementEnabled)
    return isTaskManagementEnabled
  },
  warn: function() {
    ipc.invoke('showTaskManagementDisabledDialog')
  }
}