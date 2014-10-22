# Flight Delays (GraphHack project @ GraphConnect 2014 SF)

Hack project from GraphHack meetup @ GraphConnect 2014 

![Denver flights](https://raw.github.com/allanglen/graphhack_flights/master/screenshots/denver_flights.png)

## Setup

 * Install Neo4j and load graph data from https://github.com/nicolewhite/flight_graph

 * Download CSV file with aiport codes and latitude/longitude and merge into the graph
   https://raw.github.com/allanglen/graphhack_flights/master/data/Airport_loc.csv

  ```
  LOAD CSV WITH HEADERS FROM "file:///Users/aglen/Downloads/Airport_loc.csv" AS csv
  
  MATCH (a:Airport)
  WHERE a.abbr = csv.abbr
  SET a.latitude = csv.Latitude,
          a.longitude = csv.Longitude
  ```

* Run

  ```
  npm install
  npm start
  ```
