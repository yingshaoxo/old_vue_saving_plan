// This is a bridge between JavaScript and Python using Brython
window.pythonCode = `
from browser import window, console
import json

def handle_python_call(operation, json_args):
    try:
        args = json.loads(json_args)

        namespace = {'__builtins__': __builtins__}
        for i, arg in enumerate(args):
            namespace['data_{0}'.format(i)] = arg

        if not hasattr(window, 'python_namespace'):
            window.python_namespace = namespace
        else:
            window.python_namespace.update(namespace)

        namespace = window.python_namespace

        result = eval(operation, namespace)
        return json.dumps(result)
    except Exception as e:
        console.error("Python error: {0}".format(e))
        if "eval() argument must be an expression" in str(e):
            return json.dumps(eval(operation + "\\nNone", namespace))
            #return json.dumps(None)
        else:    
            return json.dumps({'error': str(e)})

window.handle_python_call = handle_python_call
`;

function initializePython() {
    // Create and execute the Python setup script
    const pythonScript = document.createElement('script');
    pythonScript.type = 'text/python';
    pythonScript.textContent = window.pythonCode;
    document.body.appendChild(pythonScript);
    
    // Initialize Brython after appending Python script
    window.addEventListener('load', function() {
        brython({debug: 1});
    });
}

// Main function to call Python from JavaScript
function call_python(operation, ...args) {
    try {
        const jsonArgs = JSON.stringify(args);
        const result = window.handle_python_call(operation, jsonArgs);
        return JSON.parse(result);
    } catch (error) {
        console.error("JS Error:", error);
        return {error: error.message};
    }
}

// Initialize when the script loads
document.addEventListener("DOMContentLoaded", initializePython);
