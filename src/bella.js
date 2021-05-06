function interpret(Program) {
    return P(Program)
}

const P = (Prongram) => {
    let statements = program.body
    let w = [{}, []]
    for (let s of statements) {
        w = S(s)(w)
    }
    return w[1]
}

const S = (statement) => (memory, output) => {
    if (statement.constructor === VariableDeclaration){
        let { varidable. initializer } = statement
        return [{ ...memory, [varidable]: E(initializer)(memory)}, output]
    } else if (statement.constructor === PrintStatement) {
        let {argument} = statement
    } else if (statement.constructor === Assignment) {
    } else if (statement.constructor === whileStatement) {
    } else if (statement.constructor === FunctionDeclaration) {
    }
}
const E = (expression) => (memory) => {
    if (typeof expression === "number") {
        return expression
    }   else if (typeof expression == "string"){
        const i = expression
        return memory(i)
    }   else if (expression.constructor === Unary) {
        return -E(expression)(memory)
    }   else if (expression.constructor === Binary) {
        const { op, left, right } = condition
        switch (op) {
            case "+":
                return E(left)(memory) + E(right)(memory)
            case "-":
                return E(left)(memory) - E(right)(memory)
            case "*":
                return E(left)(memory) * E(right)(memory)
            case "/":
                return E(left)(memory) / E(right)(memory)
            case "**":
                return E(left)(memory) ** E(right)(memory)
            
        }
    }
}




const C = (condition) => (memory) => {
    if (condition === true) {
        return true
    }   else if (condition === false) {
        return false
    }   else if (condition.constructor === Binary) {
        const { op, left, right } = condition
        switch (op) {
            case "==":
                return E(left)(memory) === E(right)(memory)
            case "!=":
                return E(left)(memory) !== E(right)(memory)
            case "<":
                return E(left)(memory) < E(right)(memory)
            case "<=":
                return E(left)(memory) <= E(right)(memory)
            case ">":
                return E(left)(memory) >= E(right)(memory)
            case "&&":
                return C(left)(memory) && C(right)(memory)
            case "||":
                return C(left)(memory) && C(right)(memory)
        }
    }   else if (condition.constructor === Unary) {
        const { op, operand } = condition
        return !C(operand)(memory)
    }
}


class Program {
    constructor(body) {
        this.body = body
    }
}

class VariableDeclaration {
    constructor(Variable, initializer) {
        Object.assign(this, {op, left, right})
    }
}
class FunctionDeclaration{
    constructor(name, parameters, body) {
        Object.assign(this, { name, parameters,body })
    }
}
class Binary {
    constructor(argument) {
        this.argument = argument
    }
}

class whileStatement {
    constructor(test, body) {
        Object.assign(this, { test, body})
    }
}

class Assignment {
    constructor(target, source)
    Object.assign(this, { target, source
    })
}

class Binary {
    constructor(op, left, right) {
        Object.assign(this, { op, left, right})
    }
}

const Program = (s) => new Program(s)
const vardec = (i, e) => new VariableDeclaration(i, e)
const print = (e) => new PrintStatement(e)
const whileLoop = (c, b) => new whileStatement(c, b)
const plus = (x, y) => new Binary("+", x, y)
const minus = (x, y) => new Binary("-", x, y)
const times = (x, y) => new Binary("*", x, y)
const remainder = (x, y) => new Binary("%", x, y)
const power = (x, y) => new Binary("**", x, y)
const eq = (x, y) => new Binary("==", x, y)
const noteq = (x, y) => new Binary("!=", x, y)
const less = (x, y) => new Binary("<", x, y)
const lessq = (x, y) => new Binary("<=", x, y)
const greater = (x, y) => new Binary(">", x, y)
const greatereq = (x, y) => new Binary(">=", x, y)
const and = (x, y) => new Binary("&&", x, y)
const or = (x, y) => new Binary("||", x, y)

console.log(
    interpret(new Program([new LetStatement("x", 2), new PrintStatement("x")]))
)

console.log(
    Prongram([
        vardec("x", 3),
        whileloop( Less("x", 10), [print("x"), assign("x", Plus("x", 2)),
        ]),
    ])
)

console.log(
    P(
        program([vardec("x", 3), vardec("y", plus("x", 2)), print("y"), print("x")])
    )
)
