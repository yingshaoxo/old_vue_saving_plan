How to use python in browser by modifying less on old javascript framework? (If you do much in js, if their change codebase, your project will die)

In browser, only use python json and 5 types built-in operations, use eval from javascript, json in, json out. Or object in, object out. (what is built_in type functions? "".strip(), "".split(), "sub_string" in "full_string", "".startswith(), "".isascii(), ...)

For example, var hi = "genius"; var new_hi = call_python(hi**2); console.log(hi);

Where the hi created in javascript, but later injected into python runtime when execute the python code, then the call_python function returns a javascript variable for javascript_side to directly use. They use json to communicate variables (in vue it is called variable_proxy).

After basic operations in python, then in javascript level we can do more dom/div/html_elements operations, for example, get_div_by_id("#id") to handle webpage. We can even use <script> vue2 for real_time page rendering.

All in all, in this method, we are using python only for handling data, pure 5 types data, such as bool, string, int, float, list, dict, none. It would be super good to do list or dict or string operations in python because python are good at it. Just imagine a_list[:2] will give you the first two elements from a javascript list! How good it is!

## What you will do?
1. create a 'yingshaoxo_python.js' so in html, we can import to use the 'call_python()' function
2. create a 'yingshaoxo_browser_python_demo.html' to show how to use the 'yingshaoxo_python.js' according to what you understand from above needs


## More

I think you did good on this.

Can you create a javascript function called 'insert_python_code_at_global(python_code)', the python_code is string ``, it normally will create some global level python functions or variables so that callPython function can use.