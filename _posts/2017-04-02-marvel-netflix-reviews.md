---
layout: post
title: "Marvel Netflix Show Reviews"
date: 2017-04-02
---

After watching Marvel's Iron Fist on Netflix, I was pretty disappointed at how bad it was when compared with the other Marvel shows on Netflix. Reviews and articles corroborated my opinion. However, looking at the reviews on [Rotten Tomatoes](www.rottentomatoes.com), the audience rating was surprisingly high! This is my attempt to explain why so many people enjoyed this show despite the bad critic reviews using the user reviews from the site.

After downloading all the review pages from Rotten Tomatoes, I used Beautiful Soup to parse the reviews from the pages into review objects. I then ran the reviews through nltk and sklearn package functions to find out common words and phrases for all of the Marvel TV shows. You can find the code I used for this [here](https://github.com/asheahan/netflix-marvel-tv).

Let's start with DareDevil.

## DareDevil

It's the only show so far that has more than 1 season so the reviews for each season are separated out.

#### Season 1 Most Common Words

| Word | Occurences |
| --- | --- |
| show | 517 |
| daredevil | 433 |
| series | 291 |
| marvel | 281 |
| great | 212 |

#### Season 2 Most Common Words

| Word | Occurences |
| --- | --- |
| season | 688 |
| punisher | 275 |
| daredevil | 230 |
| great | 149 |
| elektra | 148 |

These aren't amazingly helpful. Most of these words are very general and speak to all of these as Marvel TV shows. I decided to see if I could run the reviews through a tf-idf algorithm to determine the relative importance of each word or phrase against the other shows. You can read more about tf-idf on [Wikipedia](https://en.wikipedia.org/wiki/Tf%E2%80%93idf).

#### Season 1 Top Tf-idf Scores (1-3 n-grams)

| Word | Score |
| --- | --- |
| daredevil | 0.3698 |
| marvel | 0.2950 |
| series | 0.2306 |
| great | 0.1664 |
| season | 0.1520 |

#### Season 2 Top Tf-idf Scores (1-3 n-grams)

| Word | Score |
| --- | --- |
| season | 0.6172 |
| punisher | 0.2939 |
| daredevil | 0.2332 |
| elektra | 0.2234 |
| bernthal | 0.1536 |

This isn't much better, we get much of the same words. Let's try phrases.

#### Season 1 Top Tf-idf Scores (2-3 n-grams)

| | Word | Score |
| --- | --- | --- |
| 1 | charlie cox | 0.1781 |
| 2 | vincent onofrio | 0.2950 |
| 3 | comic book | 0.2306 |
| 4 | matt murdock | 0.1664 |
| 5 | wilson fisk | 0.1520 |
| 6 | hell kitchen | 0.1096 |
| 7 | fight scenes | 0.0851 |
| 8 | ben affleck | 0.0832 |
| 9 | marvel daredevil | 0.0805 |
| 10 | dark gritty | 0.0738 |

#### Season 2 Top Tf-idf Scores (2-3 n-grams)

| | Word | Score |
| --- | --- | --- |
| 1 | jon bernthal | 0.3084 |
| 2 | season daredevil | 0.1430 |
| 3 | punisher elektra | 0.1340 |
| 4 | wilson fisk | 0.1283 |
| 5 | frank castle | 0.1112 |
| 6 | better season | 0.1049 |
| 7 | bernthal punisher | 0.1044 |
| 8 | daredevil season | 0.1040 |
| 9 | elodie yung | 0.0949 |
| 10 | second season | 0.0927 |

This gives a little bit of a better picture of each season listing actor and character names. Let's do the same with the rest of the shows.

## Jessica Jones

#### Season 1 Top Tf-idf Scores (2-3 n-grams)

| | Word | Score |
| --- | --- | --- |
| 1 | jessica jones | 0.5264 |
| 2 | david tennant | 0.2166 |
| 3 | krysten ritter | 0.1966 |
| 4 | luke cage | 0.0941 |
| 5 | marvel jessica | 0.0672 |
| 6 | marvel jessica jones | 0.0672 |
| 7 | comic book | 0.0660 |
| 8 | mike colter | 0.0534 |
| 9 | purple man | 0.0474 |
| 10 | mind control | 0.0420 |

## Luke Cage

#### Season 1 Top Tf-idf Scores (2-3 n-grams)

| | Word | Score |
| --- | --- | --- |
| 1 | luke cage | 0.4017 |
| 2 | jessica jones | 0.1262 |
| 3 | mike colter | 0.1048 |
| 4 | marvel netflix | 0.0746 |
| 5 | daredevil jessica | 0.0689 |
| 6 | daredevil jessica jones | 0.0689 |
| 7 | enjoyable hit | 0.0482 |
| 8 | netflix series | 0.0402 |
| 9 | tang clan | 0.0361 |
| 10 | wu tang | 0.0361 |

## Iron Fist

#### Season 1 Top Tf-idf Scores (2-3 n-grams)

| | Word | Score |
| --- | --- | --- |
| 1 | iron fist | 0.4017 |
| 2 | danny rand | 0.1262 |
| 3 | luke cage | 0.1048 |
| 4 | finn jones | 0.0746 |
| 5 | jessica jones | 0.0689 |
| 6 | marvel netflix | 0.0689 |
| 7 | kung fu | 0.0482 |
| 8 | martial arts | 0.0402 |
| 9 | fight scenes | 0.0361 |
| 10 | colleen wing | 0.0361 |

These give us a pretty good sense of what each of these seasons are about. Let's get back to the original question - why was Iron Fist rated so high by users? I separated out positive reviews (ratings > 3) from negative reviews and ran through additional analysis. I added some more stop words to filter out the general words ("Marvel", "Netflix", "Iron", "Fist", "Danny", "Rand", "Daredevil", "Jessica", "Jones", "Luke", "Cage").

#### Top Tf-idf Scores (3-4 n-grams) for Positive Reviews

| | Word | Score |
| --- | --- | --- |
| 1 | don listen critics | 0.0361 |
| 2 | don know critics | 0.0344 |
| 3 | true source material | 0.0238 |
| 4 | don understand critics | 0.0230 |
| 5 | kung fu movie | 0.0230 |
| 6 | social justice warriors | 0.0230 |
| 7 | way better critics | 0.0230 |
| 8 | critics got wrong | 0.0212 |
| 9 | looking forward defenders | 0.0197 |
| 10 | dare devil season | 0.0164 |
| 11 | kung fu master | 0.0164 |
| 12 | read comic book | 0.0164 |
| 13 | does good job | 0.0159 |
| 14 | 10 year old | 0.0132 |
| 15 | comic book character | 0.0132 |
| 16 | really enjoyed series | 0.0132 |
| 17 | bad critic reviews | 0.0131 |
| 18 | better second half | 0.0131 |
| 19 | doesn deserve hate | 0.0131 |
| 20 | getting bad reviews | 0.0131 |

So, although the scores aren't very high, this gives some insight into what people who liked Iron Fist were thinking - mostly that the critic reviews are wrong and that people shouldn't listen to them. This isn't exactly what we're looking for so let's filter out critics and run this again to see what they liked about the series.

| | Word | Score |
| --- | --- | --- |
| 1 | true source material | 0.0241 |
| 2 | kung fu movie | 0.0233 |
| 3 | social justice warriors | 0.0233 |
| 4 | looking forward defenders | 0.0200 |
| 5 | dare devil season | 0.0166 |
| 6 | don understand hate | 0.0166 |
| 7 | kung fu master | 0.0166 |
| 8 | read comic book | 0.0166 |
| 9 | does good job | 0.0161 |
| 10 | 10 year old | 0.0134 |
| 11 | comic book character | 0.0134 |
| 12 | really enjoyed series | 0.0134 |
| 13 | better second half | 0.0133 |
| 14 | doesn deserve hate | 0.0133 |
| 15 | don know hate | 0.0133 |
| 16 | getting bad reviews | 0.0133 |
| 17 | kung fu action | 0.0133 |
| 18 | kung fu movies | 0.0133 |
| 19 | really enjoying series | 0.0133 |
| 20 | tiger hidden dragon | 0.0133 |

Looks like the positive reviews were from viewers who liked the comic book and thought the show lived up to the source material. They liked the martial arts and kung fu fighting scenes.

What about the the negative reviews?

| | Word | Score |
| --- | --- | --- |
| 1 | spent 15 years | 0.0232 |
| 2 | watched 13 episodes | 0.0185 |
| 3 | bad acting bad | 0.0150 |
| 4 | based martial arts | 0.0139 |
| 5 | better fight scenes | 0.0139 |
| 6 | fight scenes look | 0.0139 |
| 7 | master kung fu | 0.0139 |
| 8 | scenes look like | 0.0139 |
| 9 | una serie donde | 0.0139 |
| 10 | carrie anne moss | 0.0112 |
| 11 | don waste time | 0.0112 |
| 12 | really wanted like | 0.0112 |
| 13 | worst shows ve | 0.0112 |
| 14 | 15 years monastery | 0.0093 |
| 15 | 15 years training | 0.0093 |
| 16 | 70s kung fu | 0.0093 |
| 17 | action scenes bad | 0.0093 |
| 18 | actor black actor | 0.0093 |
| 19 | asian martial arts | 0.0093 |
| 20 | bad fight scenes | 0.0093 |

Looks like the negative reviewers thought the acting was bad and the fight scenes came from a typical 70s kung fu movie? Seems like there are differences in opinion on the fight scenes.

This was a relatively small data set so it might be better to enhance it with additional reviews.