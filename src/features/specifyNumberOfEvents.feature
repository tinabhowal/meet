Feature: Specify number of events

Scenario: When user hasn’t specified the number of events to display, 32 events are displayed by default.
Given user hasn’t specified the number of events to display
When the user opens the app
Then 32 events are displayed by default.

Scenario: User can increase or decrease the number of events to be displayed by using the increase or decrease arrows.
Given 32 events are displayed by default
When the user increases or decreases the number of events using the increase or decrease arrow
Then the number of events displayed are the same as the input value of number of events.

Scenario: User can choose to type the required number of events to be displayed and hit enter.
Given 32 events are displayed by default
When the user chooses to type the required number instead of using the increase or decrease arrow 
Then the number of events displayed are the same as the input value of number of events.

