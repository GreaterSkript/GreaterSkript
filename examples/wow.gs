# { -> indentation
# } -> dedentation
# When indentation = 0:
# 	new tree/nbt compound
on script load {
	var stone = player("Nuutrai")
	stone.send(%string%)
	
	Event.uncancel(boolean)
	ChunkData
	if (stone.isTicking) {
		send "hello" to stone
	}
}

{
	event: "on script load" {
		body [
			{
				type: variableDeclare
				names: [
					"stone",
				]
				assignments: [
					{
						type: "function"
						name: "player"
						arguments: [
							"Nuutrai"
						]
					}
				]
			},
			{
				type: "effect"
				subtype: "change" // optional 
				subject: [

				]
				expressions
			},
			{
				type: "effect"
				subtype: "callFunction"
				function: "beans"
			},
			{
				type: "effect"
				subtype: "callMethod"
				subject: {
					type: "variable"
					name: ""
				}
			}
			call function
			variable 
			effect 
		]
		variables: [
			,
			{
				name: "beans"
				assignment: "bean"
				initTokenIndex: int+n
			}
		],
		effects: [
			{
				subject: ""
			}
		]
		callFunction: [
			
		]
		
	}
}

Event: on script load
└── Body
	├── VariableDeclare
	│	├── Names: [ "stone" ]
	│	└── Assignments
	│		└── FunctionResult
	│			├── Name: "player"
	│			└── Arguments:
	│				├── "Nuutrai"
	├── Effect
		├── Subtype: change
		├── subjects: [ ]
		└── Assignments
			└── Static
				├── 16
				├── +
				├── FunctionResult
					├── Name: "player" 

FunctionDefinition (_draw)
├── Body
    ├── FunctionCall: cls()
    └── ForLoop (i = 0, 15)
        └── FunctionCall: circfill(...)
            ├── Argument1: 64 + sin(t() / 2 + i / 16) * 40
            ├── Argument2: 64 + cos(t() / 4 + i / 16) * 40
            ├── Argument3: i
            └── Argument4: i

3 Types of expressions:
-	FunctionResult
-	Variable
-	Static

5 Types of effects:
-	Change     | +=, =
-	Method     | player.getFood()
-	NoExpr     | Event.cancel()
-	NoSubject  | wait(1 second)
	⇅ Differenctiated Eby checking if «function» is declared
-	Function   | Function()

3 Types of Events:
-	FunctionDeclare
-	Event
-	Structure

1 Type of VariableDeclare:
-	Declare


stone = player -> add to []
broadcast "stone set"
wait(1 second)
beans = stone -> add to []
send "huh?" to beans

broadcast "stone set"
wait 1 second
set stone to player
set beans to stone
send "huh?" to beans

x,y=5,2
event: "on script load"
functionDeclare: "function wow()"

variableDeclare: "var "
