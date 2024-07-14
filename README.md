Debouncing-> is a technique used to prevent a signal from being sent repeatedly.

Typing slow - 200ms
Typing fast - 20ms

Performance -
 - iphone pro max - 12 letters *1000 = 12,000 API calls (calling API for each Keystorke press)
 - with debouincing - 3 API calls * 1000 = 3000 API calls 
 - 
Debouncing with 200ms
- if difference between 2 key strokes is < 200ms - DECLINE API call (if the user type fast instead of making API calls for each key stroke debouncing will make sure that API calls are made only when the 200ms of typing is up )
- 
- >200ms make an API call (when 200 ms is done make a api cal this can be when user stops and need sugestions or is done styping )