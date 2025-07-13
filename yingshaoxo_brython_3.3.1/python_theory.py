import json

python_namespace = {'__builtins__': __builtins__}

def handle_python_call(operation, json_args, eval_only=True):
    try:
        args = json.loads(json_args)

        for i, arg in enumerate(args):
            python_namespace['data_{0}'.format(i)] = arg

        if eval_only == True:
            result = eval(operation, python_namespace)
        else:
            exec(operation, python_namespace)
            result = None

        return json.dumps(result)
    except Exception as e:
        return json.dumps({'error': str(e)})

def inject_python_code(code, *args):
    try:
        jsonArgs = json.dumps(args)
        result = handle_python_call(code, jsonArgs, eval_only=False)
        return json.loads(result)
    except Exception as e:
        return {"error": str(e)}

def evaluate_python_code(operation, *args):
    try:
        jsonArgs = json.dumps(args)
        result = handle_python_call(operation, jsonArgs, eval_only=True)
        return json.loads(result)
    except Exception as e:
        return {"error": str(e)}

print(evaluate_python_code("1+1"))
inject_python_code("abc = 3")
print(evaluate_python_code("abc"))
inject_python_code("""
def hi(a,b):
    return a*b
""")
print(evaluate_python_code("hi(2,3)"))
