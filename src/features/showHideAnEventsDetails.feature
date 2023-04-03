






Feature: Show/hide an event details

Scenario: An event element is collapsed by default.
Given the user has opened the app
When the user goes through the events that the app loads by default
Then the event details are hidden by default.

Scenario: User can expand an event to see its details.
Given the app has loaded all the events by default
When the user clicks on the Show details button
Then the event expands to show the event details.

Scenario: User can collapse an event to hide its details.
Given the user has expanded the event to check the event details
When the user clicks on the Hide details buttonThen the event details get hidden.
Then the event details get hidden.
