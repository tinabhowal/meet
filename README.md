# meet

FEATURE 1: FILTER EVENTS BY CITY
SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
SCENARIO 1: An event element is collapsed by default
Given an event element is visible.
When the event element hasn’t been clicked yet
Then the event element is collapsed.

SCENARIO 2: User can expand an event to see its details
Given an event element is visible
When: the event element is clicked
Then: the event element is expanded.

SCENARIO 3: User can collapse an event to hide its details.
Given: The event element is expanded
When: the user clicks it
Then: the element is collapsed.

FEATURE 3: SPECIFY NUMBER OF EVENTS
SCENARIO 1: When user hasn’t specified a number, 32 is the default number
Given the user has opened the app
When: the user hasn’t specified a number
Then the default number is 32.

SCENARIO 2: User can change the number of events they want to see
Given the “number of events” is visible
When the user specifies a number
Then the user sees the specified number of events.

FEATURE 4: USE THE APP WHEN OFFLINE
SCENARIO 1: Show cached data when there’s no internet connection
Given the user has opened the app 
When the user doesn't have network connection
Then user	receives data based on cached data according to his/her previous activities.

SCENARIO 2: Show error when user changes the settings (city, time range)
Given user has	opened	the	app	without	internet	connection	and	received	
cashed	data	from	their	last	session
When user	changes	the	settings	(city,	time	range)
Then user	receives	error	message	indicating	that	data	is	not	available
without	internet	connection

FEATURE 5: DATA VISUALIZATION
SCENARIO 1: Show a chart with the number of upcoming events in each city
Given the user has opened the app and	has	received a	list	of	upcoming events
When user	wishes to see the Visualized version
Then they	will	see	a	chart	showing	the	number	of	upcoming	events	in	that	
city,	categorized	by	type
