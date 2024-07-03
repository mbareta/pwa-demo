# PWA Demo Application

## Description

This is a demo repo to display various PWA techniques, such as:

- Offline Mode
- Notifications
- Push Notifications
- Add to Home Screen

## Setup

The stack is simple plain Javascript so it's easier to understand the code.
Each functionality is split into its own file for better readability.

## Caveats

Each JS file is imported to index.html with a script tag which is not a good
practice in production because at the very least it can lead to prototype
pollution. However, since this is a demo project, we use pollution to inject
functions into index.html so we can call functions with a button click.

## Styling

Since we're talking about modern web technologies, I wanted to showcase some
cool CSS tricks too. For example:

- CSS variables for primary color and background
- CSS filter property
- custom emoji cursor
- custom emoji list style type

## Server Code

To be able to send Push notifications, we need a simple server which will store
Push Subscription endpoints and an action which will send out notification to
all or some of the subscribers.

## Disclaimer

‼️ This is not production ready code! ‼️

The Push notifications are missing VAPID keys and encryption.

UI should disable or hide the buttons that are not supported by the browser or
disabled by the user (for example if user declines the request for sending
notifications).

UI should be more informative, handle success and error for each action and give
feedback to the user.

UI is not a11y tested.

Manifest JSON should include more icons and have them correctly sized.

We should add screenshot to manifest.json for better installation experience.


## Browser Compatibility

- Offline Mode works in all browsers.
- Notifications work across all modern browsers.
- Push Notifications work across all modern browsers.
- Add to Home Screen is not supported in Firefox browsers.
