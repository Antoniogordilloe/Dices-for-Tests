Feature: Dice

Background:
Given a user opens the app

Scenario: Default dice state
Then the display should show the following value: '0'

Scenario: Pressing the Roll Dice button
When the user presses the 'rollDice' button
Then the display should NOT show the following value: '0'

Scenario: Rolling the different dices
When the user presses the '<diceType>' button
When the user presses the 'rollDice' button
Then the display should show a value between: '<firstValue>' and '<secondValue>'

Examples:
| diceType | firstValue | secondValue |
|      D6  |         1  |          6  |
|      D10 |         1  |         10  |
|      D20 |         1  |         20  |
|      D99 |         1  |         99  |


Scenario: Pressing the Add Dice button
When the user presses the 'addNewDice' button <times> times
Then <numberOfDices> dices should appear on screen 

Examples:
| times  |  numberOfDices |
|     0  |              1 |
|     1  |              2 |
|     2  |              3 |
|     3  |              4 |
|     4  |              5 |

Scenario: Pressing the Clean button
When the user presses the 'clean' button
Then the display should show the following value: '0'
Then 1 dices should appear on screen 

Scenario: Disable the Add new Dice button by Reaching the dice limit
When the user presses the 'addNewDice' button 9 times
Then the 'addNewDice' button should be disabled


