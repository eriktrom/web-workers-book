var self = this;

self.addEventListener('message', function(event) {
  self.postMessage(event.data);
}, false);
/* can use the following api's inside a worker

NOT available:
- window
- document
- parent object
- no libs the depend on ^^

Available:
- navigator
- location
- XMLHttpRequest
- atob() && btoa() - Convert Base 64 ASCII to and from binary data
- setTimeout
  - clearTimeout
  - setInterval
  - clearInterval
- dump()
- application cache
- external scripts using import scripts
- spawning other web workers

 */


/*
Two Kinds of workers:
- Long running tasks
  - register an `onmessage` event handler

- Tasks that exit when operation is complete
  - one's that never register for onmessage events
  - handling single tasks that need to be offset from the main app thread
  - like fetching and parsing a massive JSON object
  - exits once the operation is over


*/
