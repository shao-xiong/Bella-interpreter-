# Bella-interpreter-

Bella is a simple programming language designed in a Programming language Semantics class.

## Example
```
let x = 3;
while x < 5 {
    print x;
    x = x + 2;
}
```
This program outputs 3 5 7 9
## syntax
```
p： prog
c: cond
e: Exp
s: Stmt
i: Ide
n: Numeral

Prog ::= s*
Exp  ::= n | i | e + e | e - e | e * e | e / e
      | e ** e | - e | (e) | i e*
      | c ? e1 : e2
Cond ::= true | false | ~ c | c && c | c || c
      | e == e | e != e | e < e | e <= e | e > e | e >= e

Stmt ::= let i e | i = e | while c s* | print e
      | fun i i* e
```

function gcd(x, y) = y==0 ? x: gcd(y, x%y)

## Denotational Semantics

```
type File = Num*
type Memory = Ide -> Num 
type State = Memory x File 

P: Prog -> File
E: Exp -> Memory -> Num
S：Stmt -> State -> State
C：Cond -> Memory -> Bool

C [[true]] m = T
C [[false]] m = F
C [[e1 == e2]] m = E [[e1]] m = E [[e2]] m
C [[e1 != e2]] m = not (E [[e1]] m = E [[e2]] m)
C [[e1 < e2]] m = E [[e1]] m < E [[E2]] m
C [[e1 <= e2]] m = E [[e1]] m <= E [[e2]] m
C [[e1 > e2]] m = E [[e1]] m > E [[e2]] m
C [[e1 >= e2]] m = E [[e1]] m >= E [[e2]] m
C [[~c]] m = not C[[c]]m
C [[c1 && c2]] m = if C [[c1]] m then C [[c2]] m else F
C [[c1 || c2]] m = if C [[c1]] m then T else C [[c2]] m
```
## Using the Interpreter
 