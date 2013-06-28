var root = typeof window !== "undefined" ? window : {};

function isWorkersAvailable() {
  return !!window.Worker;
}

if (isWorkersAvailable()) {

  root.worker = new Worker("/vendor/worker.js");

  root.worker.addEventListener('message', function(event) {
    console.log('register 1 - from addEventListener) - Worker said: ', event.data);
  });

  root.worker.onmessage = function(event) {
    console.log('(register 2 - from worker.onmessage) - Worker said: ', event.data);
  };


  worker.postMessage('Hello World'); // start the worker

} else {
  // do something else
}

