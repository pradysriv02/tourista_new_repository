# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from googlesearch import search
# import requests
# import urllib.parse
# import spacy
# import time
# import wikipedia

# app = Flask(__name__)
# CORS(app)
# nlp = spacy.load("en_core_web_sm")
# links = [
# # 'https://www.tripadvisor.in/Attractions-g297672-Activities-Udaipur_Udaipur_District_Rajasthan.html',
# # 'https://www.tripadvisor.in/Attraction_Review-g297672-d324469-Reviews-City_Palace_of_Udaipur-Udaipur_Udaipur_District_Rajasthan.html',
# # 'https://www.tripadvisor.in/Attractions-g297672-Activities-c42-Udaipur_Udaipur_District_Rajasthan.html',
# # 'https://www.tripadvisor.in/Attractions-g297672-Activities-c47-t10-Udaipur_Udaipur_District_Rajasthan.html',
# # 'https://www.tourism.rajasthan.gov.in/udaipur.html',
# # 'https://www.holidify.com/places/udaipur/sightseeing-and-things-to-do.html',
# # 'https://www.thrillophilia.com/places-to-visit-in-udaipur',
# # 'https://www.makemytrip.com/tripideas/places-to-visit-in-udaipur',
# # 'https://traveltriangle.com/blog/places-to-visit-in-udaipur/',
# # 'https://www.fabhotels.com/blog/places-to-visit-in-udaipur/'
# # 'https://www.tripadvisor.in/Attractions-g60763-Activities-New_York_City_New_York.html',
# 'https://www.planetware.com/tourist-attractions-/new-york-city-us-ny-nyc.htm',
# 'https://www.planetware.com/tourist-attractions/new-york-usny.htm',
# 'https://www.holidify.com/places/new-york-city/sightseeing-and-things-to-do.html',
# 'https://www.thrillophilia.com/destinations/new-york-city/places-to-visit',
# # 'https://travel.usnews.com/rankings/best-places-to-visit-in-new-york/',
# # 'https://travel.usnews.com/New_York_NY/Things_To_Do/',
# 'https://tourscanner.com/blog/best-places-to-visit-in-new-york-city/',
# 'https://www.exp1.com/blog/12-attractions-must-not-miss-nyc/',
# 'https://www.makemytrip.com/tripideas/places-to-visit-in-new-york'

# ]

# def search_blogs(query):
#     queryStr = "Places to visit in " + query
#     # links = []
#     for j in search(queryStr, tld="co.in", num=10, stop=10, pause=2):
#         print(j)
#         links.append(j)
#     return links

# def appyhub_text_extract(links):
#     base_url = "https://api.apyhub.com/extract/text/webpage?url="
#     headers = {'apy-token': 'APY0DHhlyEu1cyaqbnPKd8rsq4W9qCW1W3n4IKeT6KzeqgZQdxbPXAodaULKACQXvy191'}

#     blog_text = []

#     for link in links:
#         # print(base_url + link)
#         r = requests.get(base_url+link, headers=headers)
#         out = r.json()
#         time.sleep(2)
#         try:
#             blog_text.append(out["data"])
#         except KeyError:
#             print("link is inaccessible: "+link)
#     return blog_text

# def preprocess(text):
#     text = text.strip()
#     text = text.replace('\n\n', ' ')
#     text = text.replace('\n', ' ')
#     return text

# def unique_elements(ele):
#     unique_ele = []
#     ele_dict = {}
#     for i in ele:
#         i = i.lower()
#         if i in ele_dict.keys():
#             continue
#         ele_dict[i] = 1
#         unique_ele.append(i)
#     return unique_ele

# def spacy_ner(text):
#     text = preprocess(text)
#     places = []
#     doc = nlp(text)
#     for ent in doc.ents:
#         if ent.label_ == 'FAC' :
#             # or ent.label_ == 'ORG':
#             # print (ent.text, ent.label_)
#             places.append(ent.text)
#     # print(1)
    
#     places = unique_elements(places)
#     return places

# @app.route("/entities-recognition", methods=["POST"])
# def explore_city():
#     data = request.get_json(force=True)
#     print(data["city"])
#     if "link" not in data.keys() or data["link"] == "":
#         # data = {"city_name": "new york"}
#         blogLinks = search_blogs(data["city"])
#     else:
#         blogLinks = [data["link"]]
#     # blogLinks = links
#     blog_texts = appyhub_text_extract(blogLinks)
#     entities = []
#     for text in blog_texts:
#         place = spacy_ner(text)
#         entities = entities + place

#     entities = unique_elements(entities)
#     print(entities)
#     return {"entities": entities}


# #################################################
# ########### TODO: api to fetch geo-details
# #################################################

# @app.route("/geo-details", methods=["POST"])
# def fetch_geo_details():
#     details = []
#     entities = request.get_json(force=True)
#     # print(data)
#     # entities = data["entities"]
#     # print(entities)
#     for ent in entities:
#         # print(ent)
#         try:
#             wiki = wikipedia.page(ent + " (place)")
#             print(wiki.coordinates[0])
#             # print(wiki.title)
#             # print(wiki.url)
#             # print(wiki.content[:1000])
#             # print(wiki.images[0])
#             geo_dict = {}
#             # url = 'https://nominatim.openstreetmap.org/search/' + urllib.parse.quote(ent) +'?format=json'
#             # resp = requests.get(url).json()
#             # print(response[0]["lat"])
#             # print(response[0]["lon"])
#             geo_dict = {"title": wiki.title, 
#                     "description": wiki.content[:1000],
#                     "image": wiki.images[0],
#                     "wiki_url": wiki.url,
#                     "latitude": wiki.coordinates[0],
#                     "longitude": wiki.coordinates[1]
#             }
#             details.append(geo_dict)
#         except:
#             continue
#     print(details)
#     return details


# # def main():
# #     print(explore_city())

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=8000)


from flask import Flask, request, jsonify
from flask_cors import CORS
from googlesearch import search
import requests
import urllib.parse
import spacy
import time
import wikipedia


app = Flask(__name__)
CORS(app)
nlp = spacy.load("en_core_web_trf")
links = [
# 'https://www.tripadvisor.in/Attractions-g297672-Activities-Udaipur_Udaipur_District_Rajasthan.html',
# 'https://www.tripadvisor.in/Attraction_Review-g297672-d324469-Reviews-City_Palace_of_Udaipur-Udaipur_Udaipur_District_Rajasthan.html',
# 'https://www.tripadvisor.in/Attractions-g297672-Activities-c42-Udaipur_Udaipur_District_Rajasthan.html',
# 'https://www.tripadvisor.in/Attractions-g297672-Activities-c47-t10-Udaipur_Udaipur_District_Rajasthan.html',
# 'https://www.tourism.rajasthan.gov.in/udaipur.html',
# 'https://www.holidify.com/places/udaipur/sightseeing-and-things-to-do.html',
# 'https://www.thrillophilia.com/places-to-visit-in-udaipur',
# 'https://www.makemytrip.com/tripideas/places-to-visit-in-udaipur',
# 'https://traveltriangle.com/blog/places-to-visit-in-udaipur/',
# 'https://www.fabhotels.com/blog/places-to-visit-in-udaipur/'
# 'https://www.tripadvisor.in/Attractions-g60763-Activities-New_York_City_New_York.html',
'https://www.planetware.com/tourist-attractions-/new-york-city-us-ny-nyc.htm',
'https://www.planetware.com/tourist-attractions/new-york-usny.htm',
'https://www.holidify.com/places/new-york-city/sightseeing-and-things-to-do.html',
'https://www.thrillophilia.com/destinations/new-york-city/places-to-visit',
# 'https://travel.usnews.com/rankings/best-places-to-visit-in-new-york/',
# 'https://travel.usnews.com/New_York_NY/Things_To_Do/',
'https://tourscanner.com/blog/best-places-to-visit-in-new-york-city/',
'https://www.exp1.com/blog/12-attractions-must-not-miss-nyc/',
'https://www.makemytrip.com/tripideas/places-to-visit-in-new-york'
]


# def search_blogs(query):
#     # print(query)
#     queryStr = "Places to visit in Surat"
#     # links = []
#     # results = []

#     # # results.extend([r for r in search(queryStr)])
#     # # print(results)

#     # # print(search(queryStr))

#     # # j = search(queryStr, num_results=100, lang="en")
#     # # for i in j:
#     # #     print(i)
    
#     # # Performing Google search
#     # for j in search("Places to visit in Surat", num_results=10,stop=10):
#     #     print(j)
#     #     links.append(j)
    
#     # return links
#     headers = {
#     'User-agent':
#     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19582'
#     }

#     requests.post(queryStr, headers=headers)


def appyhub_text_extract(links):
    base_url = "https://api.apyhub.com/extract/text/webpage?url="
    headers = {'apy-token': 'APY07ptwxAE1dSsxFQhe58gdf4OnVXwwFJTIqRk9SKYwqFWqBwxWGH5tfgV8jMD64'}

    blog_text = []

    for link in links:
        # print(base_url + link)
        r = requests.get(base_url+link, headers=headers)
        out = r.json()
        time.sleep(2)
        try:
            blog_text.append(out["data"])
        except KeyError:
            print("link is inaccessible: "+link)
    return blog_text

def preprocess(text):
    text = text.strip()
    text = text.replace('\n\n', ' ')
    text = text.replace('\n', ' ')
    return text

def unique_elements(ele):
    unique_ele = []
    ele_dict = {}
    for i in ele:
        i = i.lower()
        if i in ele_dict.keys():
            continue
        ele_dict[i] = 1
        unique_ele.append(i)
    return unique_ele

def spacy_ner(text):
    text = preprocess(text)
    places = []
    doc = nlp(text)
    for ent in doc.ents:
        if ent.label_ == 'FAC' :
            # or ent.label_ == 'ORG':
            # print (ent.text, ent.label_)
            places.append(ent.text)
    # print(1)
    
    places = unique_elements(places)
    return places

@app.route("/entities-recognition", methods=["POST"])
def explore_city():
    # data = request.get_json(force=True)
    data={
        "city":"Surat",
        "link":"https://wanderlog.com/list/itinerary/1270/1-day-surat-itinerary"
    }
    print(data["city"])
    print(data["link"])
    blog_texts = appyhub_text_extract([data["link"]])
    entities = []
    print(blog_texts)
    for text in blog_texts:
        place = spacy_ner(text)
        entities = entities + place

    entities = unique_elements(entities)
    print(entities)
    
    entities = entities[:10]
    return {"entities": entities}

#################################################
########### TODO: api to fetch geo-details
#################################################

@app.route("/geo-details", methods=["POST"])
def fetch_geo_details():
    details = []
    entities = request.get_json(force=True)
    # print(data)
    # entities = data["entities"]
    # print(entities)
    for ent in entities:
        # print(ent)
        try:
            wiki = wikipedia.page(ent + " (place)")
            print(wiki.coordinates[0])
            # print(wiki.title)
            # print(wiki.url)
            # print(wiki.content[:1000])
            # print(wiki.images[0])
            geo_dict = {}
            # url = 'https://nominatim.openstreetmap.org/search/' + urllib.parse.quote(ent) +'?format=json'
            # resp = requests.get(url).json()
            # print(response[0]["lat"])
            # print(response[0]["lon"])
            geo_dict = {"title": wiki.title, 
                    "description": wiki.content[:1000],
                    "image": wiki.images[0],
                    "wiki_url": wiki.url,
                    "latitude": wiki.coordinates[0],
                    "longitude": wiki.coordinates[1]
            }
            details.append(geo_dict)
        except:
            continue
    print(details)
    return details


# def main():
#     print(explore_city())

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000)