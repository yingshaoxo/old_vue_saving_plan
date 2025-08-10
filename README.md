# Local Vue Saving Project

My old vue projects rely on:

```
"core-js": "3.33.2",
"vue": "2.7.14",
"ant-design-vue": "3.2.20",
"less": "4.2.0",

"snarkdown": "2.0.0"
"es6-promise": "4.2.8",
"isomorphic-fetch": "3.0.0",
```

It is time to say goodbay to npm and its online services.

## How to use?

Just serve current folder as http service, and visit 'index.html' or 'vue3_index.html'.

## Bugs in antdesign

No matter how you try to import antd from <scrpt> tag, it will not work. They didn't test their library before they publish.

```
Uncaught TypeError: t is undefined
antd is not defined
```
