# Travelo
## Overview
The search for tourist destinations is one of the steps that is generally carried out when planning a trip. Travel blogs are a significant source for describing tourist destinations. However, due to the large amount of text contained in them and description of multiple tourist attractions, reading through a travel blog is time consuming.  Also, the bulk of unstructured text makes it difficult for the visualization of textual content. 
Our solution uses Named Entity Recognition to identity tourist attractions from travel blogs and present them in a visually appealing way, making it easier for people to plan their travel itinerary.


### Try it out:
[Project demo link](https://youtu.be/MEo2LK8TEws)
----------------------------------
---------------------

## Inspiration
Whenever we plan to go somewhere for the first time, we have to endlessly search for places of attractions via blogs and other internet sources to visit them and make the best use of our visit. 
Usually, travel-related blogs have some quite insightful information because of the personal experience of the author. <br/>
Another problem that we came across is that usually local business and providers usually are missed out if people book and plan their entire journey via some famous tourism agencies. Due to commissions involved, local persona get less share than they deserve. <br/>
So with this application, we tried to solve these aforementioned problems.

## What it does?
**For Tourists:**<br/>
The most essential feature is that it reads blogs for you and give you the locations that you should visit using Named Entity Recognition(NER), which is an NLP based method. User just needs to enter the place or provide with a blog link and our application parse it.<br/>
It also provides those locations on a map with a path visualisation among all the waypoints in the most efficient manner.<br/>
User can click on those locations on the map and pop-up will appear through which one can know more about that attraction. <br/> 
User has the option to look out for the local vendors as well in the same map and plan out his itinerary.<br/><br/>
**For Local business:**<br/>
You get to register on this application which lists your business on the map as well with reference to the city entered. <br/>
So, when a tourist searchs for a city, those local businesses will also be shown to him/her and increase the chances of their visit to those locations. <br/>
They can also add images and their details as well for an insight for the visitors.

## How we built it?
* Used Google search API to get popular blogs for the location. 
* Then we used this [API](https://apyhub.com/utility/extractor-webpage-text?slug=extractor-webpage-text) from apyhub to extract the content of those blogs and pages.
* An NLP based technique called Name Entity Recognition is used to get the potential spots that could be visited in a particular location.
* Once this is done, we used the [Mapbox](https://docs.mapbox.com)'s maps and Directions API to get the coordinated of those spots and present them on the map with a path. We also did the same for local vendors.
* There's an option for local business vendors to pick their locations and add their information to get listed on the application.
* Used [Twilio](https://www.twilio.com/) to notify the vendors on whatsapp about their listing on the map.
* Used Wikipedia's API to fetch information about the places.
* **Tech Stack:**
    * Frontend: React, styled components
    * Backend: Node.js, Flask
    * Database: MongoDB


## Accomplishments we're proud of
* Completing this multi utility application in 36 hours is something that we can pat our backs for.
* Surviving on just 2 hours of sleep and coffee is not a flex exactly, but we are still proud.
* Used tools, techniques and APIs we never used before which took a toll on our mental health but we still passed with flying colors.

## Challenges we ran into
There were a lot of difficulties that we faced, some due to lack of enough context, unstable internet, limit reached to requests sent to google search. Some of these are:
* Not many publically available datasets, making it difficult for us to train a model. We used the `en_core_web_sm` model from spacy for Named Entity Recognition at the end, and couldn't achieve the desired accuracy. 
* BERT model was there, which we trained, but it was a bit too heavy to be deployed in free tier.
* Google limits the number of requests we can make, and hence we could not make a dataset of our own, and got blocked for a day.
* It was tough to integrate mapboxgl into our application since there were a few complications we created of our own by using functional components.
* First offline hackathon, was a bit inconvenient (but fun) challenge too!


## What we learned
* A simple phase of ideation about how great it is to discuss your ideas with team-mates and mentors.
* Research is a necessary phase and include reading blog, research papers, and discussing what things can be implemented.
* And much more...

## What's next for Travelo
* Preparing a full-fledged itinerary for the user including budget and date parameters.
* Using elastic search and our own data store to store and search to avoid redundat API calls for each user query of same places.
* Build and train the NER model to improve it's accuracy. <br/>

----------------------------------
---------------------



