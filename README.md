# 2022 NFL Pickem' App (Phase 2 Project)

This app allows users to save their name and then choose their predicted winners for the 2022 NFL season. The user will be able to toggle through the weeks of the season and tally their predictions. The app stores their picks onto a database file. Conferences and divisions can be toggled to get a view of each team's standings. The divisional view allows users to click on the team name, and then allows the user to click on any team specific links in order to gather more information. 

## Installation

First the npm will need to be installed

```bash
install npm
```
then open and run the server
```bash
json-server --watch db.json
```
Finally start the npm
```bash
npm start
```
PLEASE NOTE

If you receive the following error upon load:

Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://api.myfantasyleague.com/fflnetdynamic2022/nfl_sched_9.json. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 200.

This error can be corrected by installing this browser extension:

https://addons.mozilla.org/en-US/firefox/addon/moesif-origin-cors-changer1/

Once installed and activated you can add:

https://api.myfantasyleague.com/fflnetdynamic2022/

to your allow list.

## Usage
The app is used through the UI. Users will first have to enter a name, then the user may toggle through the weeks or begin picking winners. Standings are calculated automatically. The user may also navigate through the different standings tables. The division tables allow the team to be clicked to be presented with a team card.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Resources
The schedule is generated through an open api and can be accessed here: 
```bash
https://www77.myfantasyleague.com/2022/support?FAQ=1135
```
Dropdown styling done by: Doane Hopkins
```bash
 https://www.sliderrevolution.com/resources/css-dropdown-menu/
``` 
 
db file created using an ESPN json call, and then customized. The origional can be accessed here: 
```bash
https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams
``` 
