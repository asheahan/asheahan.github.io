---
layout: post
title: "Game of Thrones - Character Deaths"
date: 2016-10-02
---

Like many people, I love Game of Thrones - both TV show and book series. Seriously, I've read the series twice and am thinking of reading it for the third time. However, there are spoilers ahead so please stop if you aren't up to date!

A big part of what makes this series so popular is the sheer amount of main characters who die. Using the dataset I've found, these are the things I'd like to find out:

1. Which book was the most deadly?
2. Which house suffered the most deaths? Nobles vs commonfolk?
3. Do women or men die more often?

This is basic analysis so I'll just use the dplyr and ggplot2 libraries in R. I imported the csv files into a local MySQL database and pulled the data into R from the database.

### 1. Which book was the most deadly?
Filtering by those characters who died, then grouping by book, it seems like Storm of Swords was the most deadly in terms of numbers of deaths. The least was Feast for Crows.

![alt text](/assets/2016-10-02-game-of-thrones-character-deaths/01-deaths-by-book.png "Deaths by Book")

### 2. Which house suffered the most deaths? Nobles vs commonfolk?
For this, we need to do a little cleanup with the data. Some characters serve houses as servants while others are bannermen. For our purposes this distinction shouldn't matter so we'll replace this in SQL.

We're also going to filter out those characters who don't have an allegiance, part of the Night's Watch, and wildlings.

Unsurprisingly, the Starks have lost the most (although this might just be because the Stark family is a huge focus of the series). Looking at nobility vs. commonfolk, the Baratheons have lost more nobility while the Greyjoys have lost more commonfolk.

![alt text](/assets/2016-10-02-game-of-thrones-character-deaths/02-deaths-by-house.png "Deaths by House")

### 3. Do women or men die more often?
Can you guess? Of course men have died more often -

![alt text](/assets/2016-10-02-game-of-thrones-character-deaths/03-deaths-by-gender.png "Deaths by Gender")

This analysis uses [this data](https://www.kaggle.com/mylesoneill/game-of-thrones) from Kaggle datasets.