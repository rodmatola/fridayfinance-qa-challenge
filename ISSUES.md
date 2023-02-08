# QA Notes

This document contains some notes, questions and suggestions I had during my testing sections. There is no order and I choose to only explain them in text, not putting any graphical evidence.

## Hint of what a strong password is not explicit

In the sign up flow, at the "Create a password" a password screen, is asked to user create a strong password, but the hint is a tiny red circle with an exclamation point inside. No clue that I have to put the mouse over the icon to have a hint. Also, the hint is done in parts, for example, if I type just letters, the hint will be `Please provide at least one number`. If I add a number, the hint will be `Please provide at least one special character`.

Suggestion: put an explicit text saying that at least one number and one special character is necessary. That's the actual behavior. I also suggest to add at least on capital letter to make the password stronger. We are dealing with a financial product. We must encourage the user to make the strongest password possible.

## The clients "moving strip" reinitiated abruptly

This banner is a several icons being translated to the right, but when it reaches the last image, it begins from position zero.

Suggestion: put the images in a carrousel where the last image is followed by the first one.
