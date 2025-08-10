# IE6 JavaScript Survival Guide

> You can ask your AI to: "Can you guide me to compile a vue2.7 that support ie6? the compiled js should be able to get imported by <script> directly."

> If you get the workable code, then you can ignore this article.

> If you get nothing from your AI bot, you should use `../requests_library/jquery-1.12.4.js`, which supports ie6 very well. And you should also have a look of documentation of jquery from `./jquery_to_native.md`.

## 1. DOM Selection
```
// Modern (not IE6):
document.querySelector('.box')

// IE6 Compatible:
document.getElementById('box') // by ID
document.getElementsByTagName('div')[0] // first div
```

## 2. Event Handling
```
// Modern:
element.addEventListener('click', handler)

// IE6:
element.attachEvent('onclick', handler)

// Cross-browser solution:
if (element.addEventListener) {
  element.addEventListener('click', handler, false);
} else if (element.attachEvent) {
  element.attachEvent('onclick', handler);
}
```

## 3. AJAX Requests
```
// Modern:
fetch('/api')

// IE6:
var xhr = new ActiveXObject("Microsoft.XMLHTTP");
xhr.open("GET", "/api", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
```

## 4. CSS Class Manipulation
```
// Modern:
element.classList.add('active')

// IE6:
function addClass(element, className) {
  if (element.className.indexOf(className) == -1) {
    element.className += ' ' + className;
  }
}
addClass(document.getElementById('box'), 'active');
```

## 5. JSON Handling
```
// Modern:
JSON.parse('{"name":"John"}')

// IE6:
eval('(' + '{"name":"John"}' + ')') // UNSAFE but works
// OR include json2.js polyfill
```

## 6. Feature Detection
```
// Check for XMLHttpRequest support
var xhr = window.XMLHttpRequest 
  ? new XMLHttpRequest() 
  : new ActiveXObject("Microsoft.XMLHTTP");

// Check for getElementsByClassName
var hasClassAPI = !!document.getElementsByClassName;
```

## 7. Memory Leak Prevention
```
// Always detach events before removing elements
function cleanup() {
  element.detachEvent('onclick', handler);
  element.parentNode.removeChild(element);
}
```

## 8. Debugging Tips
```
// Basic debugging (no console.log in IE6)
try {
  // Problematic code
} catch(e) {
  alert("Error: " + e.message); // Shows in alert
}

// Simple logging alternative:
function log(msg) {
  document.getElementById('debug').innerHTML += msg + '<br>';
}
```

## 9. Style Access
```
// Modern:
element.style.getPropertyValue('color')

// IE6:
element.currentStyle.color

// Cross-browser:
function getStyle(element, property) {
  return element.currentStyle 
    ? element.currentStyle[property] 
    : window.getComputedStyle(element)[property];
}
```

## 10. Script Loading
```
// Dynamic script loading
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'library.js';
document.getElementsByTagName('head')[0].appendChild(script);
```

## 11. Only load script in IE6
```
<!--[if IE 6]>
<script type="text/javascript">
</script>
<![endif]-->
```
