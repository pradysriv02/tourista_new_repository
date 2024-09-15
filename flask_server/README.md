# Flask Server Template

The README is to document how flask server will be set up. And some API documentation around it.

## Environment Setup

- Create a ViretualEnv with, ```python3 -m venv env```.

- Activate virtual env, ```source env/bin/activate```.

- ```pip install -r requirements.txt```, for installing the dependencies.

- Download spacy language model, ```python -m spacy download en_core_web_sm```.

- To export development environment, ```export FLASK_ENV=development```.

- To start the flask server, ```flask run```.

## API Routes

Send a get request with routes ```/entities-recognition``` and have a data `city-name` as compulsory and `blog-link` optional.

|Sr.No| Route    | Description |
| :- | :---------   | :----------- |
| 1 | `\entities-recognition`| The API searches for `n` number of blogs related to tour in a city, extracts the text, and performs `NER` (Named Entity Recognition), to identify places of visit in the city. |
| 2 | `\geo-details`| The API endpoint takes in all the `entities` user selected out of the once we identified earlier, and obtains the geographic coordinates of these, as well as a brief description, images, and wikipedia url. |

### `\entities-recognition`

Sample request:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"city": "new york", "link": "https://blog.back4app.com/backend-server-hosting/"}' https://htf-flask-backend-production.up.railway.app/entities-recognition
```

Expected Response:

```json
{
    "entities": ["Times Square", "Statue of Liberty", "City Lake", "Lorem Ipsum"]
}
```

## [Flask Deployment Link](https://blog.back4app.com/backend-server-hosting/)
