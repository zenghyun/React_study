# Authentication

## How Authentication Works In React Apps 
- We can't just save and use the 'yes' => We could send a fake 'yes' to the server to request protected data 
    -   Server-side Sessions
        -   Store unique identifier on server, send same identifier to client
        -   Client sends identifier along with requests to protected resources
    -   Authentication Tokens
        -   Create (but not store) "permission" token on server, send token to client 
        -   Client sends token along with requests to protected resources

## Implementing User Authentication

## Adding Auth Persistence & Auto-Logout 

 