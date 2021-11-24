## Idle Timer
The idle timer widget can trigger actions for inactive users. When the user is not interacting with the app, move the mouse, click our touch, the timer will run; when the timer is completed, it will execute the action.
The timer can be used to show a question when detecting a user being idle, asking if he whats to keep the session open. When the user does not respond, the user can be logged out.  With the timer, we make our application more user-friendly than the standard session timeout.  And allows use even to change the behaviour depending on the user or user groups.

Please note that if the browser is completely suspended, this could happen on mobile when the browser is in the background; the timer might not execute.

## Features
- Set a time out with a static value.
- Or set a time out with a dynamic value based on a context attribute.
- Execute an action; microflow, nanoflow, open page, etc.

## Usage
- Add to the page
- Set timeout through static or trough attribute
- Select an action to execute
