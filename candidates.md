# Draft — Say What Actually Broke (message 1: draft)

Candidates brainstormed (all mine, written here first):

1. "Your changes are gone. Autosave was writing to a folder that doesn't exist — it has been faithfully saving nothing for three years."
2. "We deleted your draft to free up disk space. The disk is still full. Your draft is still gone."
3. "The database is locked by a query from 2019. Nobody remembers what it does. Nobody dares to stop it."
4. "The server ran out of memory. It was remembering everything you deleted."

Draft pick: #1. It names a real, specific failure every dev recognises
(autosave silently writing into the void), it is funny on a single read
("faithfully saving nothing"), and a team could actually ship it — it
admits a bug without admitting deliberate destruction of user work, unlike
#2. #3 is dev-insider only; #4 is good but a weaker punchline.

Draft text (to be revised in the next message):
"Your changes are gone. Autosave was writing to a folder that doesn't exist — it has been faithfully saving nothing for three years."
