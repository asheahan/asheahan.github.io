---
layout: post
title: "Airplane Crashes"
date: 2016-10-08
---

Let's take a look at airplane crashes to see if we can find any patterns. This will be a descriptive analytics exercise, but may evolve to a predictive model builder in the future.

Using this dataset, here are some initial questions we can try to answer in our data exploration:

1. Year to year, can we show the number of crashes? Deaths?
2. Which countries have had the most crashes?

For this analysis, I'll use Python and the pandas library to transform the data and create summary statistics, then I'll use Tableau for the visualizations. I've imported the data into a local MySQL database for storage.

### 1. Year to year, can we show the number of crashes? Deaths?
Here, we'll need to parse out the year from the date field, then group by year. We can then do a count on the number of grouped rows to get the number of crashes, then do a sum on the fatalities field to get the number of deaths by year. It seems within this dataset, 1972 had the highest number of crashes with a total of 104 crashes. In terms of fatalities, 1972 also had the highest number of fatalities with 2,937.

<div class='tableauPlaceholder' id='viz1475966535893' style='position: relative'><noscript><a href='#'><img alt='Airplane Crashes by Year ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ai&#47;AirplaneCrashes_1&#47;Sheet1&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='site_root' value='' /><param name='name' value='AirplaneCrashes_1&#47;Sheet1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ai&#47;AirplaneCrashes_1&#47;Sheet1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div>
<script type='text/javascript'>
  var divElement = document.getElementById('viz1475966535893');
  var vizElement = divElement.getElementsByTagName('object')[0];
  vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
</script>

<div class='tableauPlaceholder' id='viz1475967157579' style='position: relative'><noscript><a href='#'><img alt='Airplane Fatalities by Year ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ai&#47;AirplaneFatalities&#47;Sheet2&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='site_root' value='' /><param name='name' value='AirplaneFatalities&#47;Sheet2' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ai&#47;AirplaneFatalities&#47;Sheet2&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div>

<script type='text/javascript'>
  var divElement = document.getElementById('viz1475967157579');
  var vizElement = divElement.getElementsByTagName('object')[0];
  vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
</script>

### 2. Which countries have had the most crashes?
To answer this, we'll need to extract the country name from the Location field. I'll also need to categorize US states as United States. The data needs to be cleaned a bit more as there are lots of misspellings and extra info in the Location field. But, generally, it seems that the most crashes have occurred in the US.

<div class='tableauPlaceholder' id='viz1475977087135' style='position: relative'><noscript><a href='#'><img alt='Crashes by Country ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;BB&#47;BB5PR4BNQ&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='path' value='shared&#47;BB5PR4BNQ' /> <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;BB&#47;BB5PR4BNQ&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div>
<script type='text/javascript'>
  var divElement = document.getElementById('viz1475977087135');
  var vizElement = divElement.getElementsByTagName('object')[0];
  vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
</script>

This analysis uses [this data](https://opendata.socrata.com/Government/Airplane-Crashes-and-Fatalities-Since-1908/q2te-8cvq) from Socrata.