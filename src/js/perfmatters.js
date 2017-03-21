// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

function logCRP() {
  var t = window.performance.timing,
    dcl = t.domContentLoadedEventStart - t.domLoading,
    complete = t.domComplete - t.domLoading;
  var stats = document.getElementById("crp-stats");
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';

    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = "//fonts.googleapis.com/css?family=Open+Sans:400,700";
    document.querySelector("head").appendChild(link);
}

window.addEventListener("load", function(event) {
  logCRP();
});
