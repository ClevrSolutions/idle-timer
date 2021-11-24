## Idle Timer
The idle timer widget can trigger actions for inactive users. When the user is not interacting with the app, move the mouse, click our touch, the timer will run; when the timer is completed, it will execute the action.
The timer can be used to show a question when detecting a user being idle, asking if he whats to keep the session open. When the user does not respond, the user can be logged out. With the timer, we make our application more user-friendly than the standard session timeout. Based on an attribute value, the timeout allows us to change the behaviour depending on the user or the user groups.

Please note that if the browser is completely suspended, this could happen on a mobile device when the browser is in the background; the timer might not execute as expected.

## Features
- Set a timeout with a static value.
- Or set a timeout with a dynamic value based on a context attribute.
- Execute an action; microflow, nanoflow, open page, etc.

## Usage
- Add the widget to the page
- Set the timeout through a static value or through a context attribute
- Select an action to execute
- Implement the required logic with the standard Mendix components
