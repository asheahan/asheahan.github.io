---
layout: post
title: "Setting Up Marvel Netflix Graph Database"
date: 2017-04-04
---

In this post, I'm going to create a graph database using Neo4j to store Marvel Netflix shows and reviews (this data was obtained in the [previous post](https://github.com/asheahan/netflix-marvel-tv))

* Download Neo4j Community Edition from their [website](https://neo4j.com/download/).
I'm using Ubuntu so I downloaded the tarball for Linux.
* After extraction, start the server by navigating to the install directory in a console and running `./bin/neo4j console`
* Browse to http://localhost:7474 and sign in using the default credentials: neo4j/neo4j. Change the password.
* We're going to create the show nodes with the following script (replace password with whatever you changed the password to).
  
```python
from py2neo import Graph

graph = Graph(password="password")

shows = ['DareDevil', 'Jessica Jones', 'Luke Cage', 'Iron Fist']

for show in shows:
    graph.run("CREATE (s:Show {name:{S}}) RETURN s", {"S": show})
```
* Next, we're going to create the user nodes and create the reviews as relationships between users and shows using the data obtained from Rotten Tomatoes:  

```python
import json
from py2neo import Graph

graph = Graph(password="password")

with open('data/daredevil/audience-reviews.json', 'r') as handle:
    DD_AUDIENCE_REVIEWS = json.load(handle)

with open('data/jessica-jones/audience-reviews.json', 'r') as handle:
    JJ_AUDIENCE_REVIEWS = json.load(handle)

with open('data/luke-cage/audience-reviews.json', 'r') as handle:
    LC_AUDIENCE_REVIEWS = json.load(handle)

with open('data/iron-fist/audience-reviews.json', 'r') as handle:
    IF_AUDIENCE_REVIEWS = json.load(handle)

AUDIENCE_REVIEWS = DD_AUDIENCE_REVIEWS + JJ_AUDIENCE_REVIEWS + LC_AUDIENCE_REVIEWS + IF_AUDIENCE_REVIEWS

users = {}
for review in AUDIENCE_REVIEWS:
    if review['user_id'] not in users.items():
        users[review['user_id']] = review['user_name']

for user, name in users.items():
    graph.run("CREATE (u:User {id: {i}, name:{n}}) RETURN u", {"i": user, "n": name})

for review in AUDIENCE_REVIEWS:
    graph.run("MATCH (u:User), (s:Show) WHERE u.id = {i} AND s.name = {sh} CREATE (u)-[r:REVIEWED {date: {d}, season: {se}, rating: {ra}, review: {re}}]->(s) RETURN r", 
        {"i": review['user_id'], "sh": review['show'], "d": review['date'], "se": review['season'], "ra": review['rating'], "re": review['body']})

```

* We're all set with our basic database! We can run some queries on this data -

```python
// users who've rated a show with a 1
MATCH (u:User)-[r:REVIEWED]->(s) WHERE r.rating = 1.0 RETURN u.name, r.date, r.season, s.name ORDER BY u.name;
// info for users who've reviewed more than 3 shows
MATCH (u:User)-[r:REVIEWED]->(s) WITH u, COUNT(s) AS cnt, COLLECT(r) AS revs,  COLLECT(s) AS shows WHERE cnt > 3 RETURN u.name, revs, shows;
// how many reviews for each show
MATCH ()-[r:REVIEWED]->(s) WITH s, COUNT(r) AS reviews RETURN s.name, reviews;
```
