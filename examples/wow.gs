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
	│				└── "Nuutrai"
	├── Effect
		├── Subtype: change
		├── subjects: [ ]
		└── Assignments
			└── Static
				├── 16
				├── +
				└── FunctionResult
					└── Name: "player"


FunctionDefinition (_draw)
├── Body
    ├── FunctionCall: cls()
    └── ForLoop (i = 0, 15)
        └── FunctionCall: circfill(...)
            ├── Argument1: 64 + sin(t() / 2 + i / 16) * 40
            ├── Argument2: 64 + cos(t() / 4 + i / 16) * 40
            ├── Argument3: i
            └── Argument4: i

4 Types of expressions:
-	FunctionResult
	├── Name: String
	└── Arguments: Expressions

-	Variable
	└── Name: Strings

-	Literal[]: It's own thing idfk

-	Method
	├── Subject
	├── Method
	└── Arguments

4 Types of effects:
-	Change     | +=, =
	├── Subject
	├── Operand
	└── Expression

-	Method     | player.getFood()
	├── Subject
	├── Method
	└── *Arguments
	
-	NoSubject  | wait(1 second)
	├── Method
	└── Arguments
	⇅ Differenctiated by checking if «function» is declared.
-	Function   | Function()
	├── Name
	└── Arguments

3 Types of Events:
-	FunctionDeclare 
	├── Name
	├── Arguments
	├── ReturnType
	└── Body

-	Event
	├── Definition
	└── Body
	⇅ Differenctiated by whether begins in a body
-	Structure
	├── Definition
	├── *Type -> Unnessesary unless it's a native Skript thing
	└── Body

1 Type of VariableDeclare:
-	Declare
	├── Scope
	├── Names
	#   List
	└── Assignments

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
