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

Scenario: Pressing the Clean button
When the user presses the 'clean' button
Then the display should show the following value: '0'
