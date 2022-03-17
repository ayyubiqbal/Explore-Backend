#Lottery API

-   sell lottery ticket
-   update lottery ticket
-   delete lottery ticket
-   get all tickets
-   get ticket by id
-   bulk buy (user can buy multiple ticket at a time)
-   raffle draw

Ticket:

-   number (unique),
-   username
-   price
-   timestamp


Routes:

-   /tickets/t/:ticketId GET find single ticket
-   /tickets/t/:ticketId PATCH update ticket by id
-   /tickets/t/:ticketId DELETE ticket by id
-   /tickets/t/:username GET find tickets for a given user
-   /tickets/t/:username PATCH update for a given user
-   /tickets/t/:username DELETE delete all tickets for a given user
-   /tickets/sell - create tickets
-   /tickets/bulk - bulk sell ticket 
-   /tickets/draw 
-   /tickets - find all tickets 