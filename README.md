# Travel Memory

`.env` file to work with the backend after creating a database in mongodb: 

```
MONGO_URI='ENTER_YOUR_URL'
PORT=3001
```

Data format to be added: 

```json
{
    "tripName": "Incredible India",
    "startDateOfJourney": "19-03-2022",
    "endDateOfJourney": "27-03-2022",
    "nameOfHotels":"Hotel Namaste, Backpackers Club",
    "placesVisited":"Delhi, Kolkata, Chennai, Mumbai",
    "totalCost": 800000,
    "tripType": "leisure",
    "experience": "Lorem Ipsum, Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum, ",
    "image": "https://t3.ftcdn.net/jpg/03/04/85/26/360_F_304852693_nSOn9KvUgafgvZ6wM0CNaULYUa7xXBkA.jpg",
    "shortDescription":"India is a wonderful country with rich culture and good people.",
    "featured": true
}
```


For frontend, you need to create `.env` file and put the following content (remember to change it based on your requirements):
```bash
REACT_APP_BACKEND_URL=http://localhost:3001
```
```
Note:- This repo dose not use docker-compose.yaml or azure-pipelines.yml. I simply create a n/w ran backend container on that n/w & connected the backend to mongo db via URI configured in  Dockerfile.
Commands I ran--
---Local
docker network create b16a-sm 
docker network ls
docker run -d -p 8001:80 --name nginx_b16a_network --network b16a-sm nginx
-------------------------------
git remote -v
origin  https://github.com/UnpredictablePrashant/TravelMemory.git (fetch)
origin  https://github.com/UnpredictablePrashant/TravelMemory.git (push)

Changing fetch & push to my git repo
git remote set-url origin https://github.com/<your-user>/<your-repo>.git
git remote set-url origin https://github.com/sheikhshuaib35-png/travel_memory_bkend_mongo_DockerFile.git
If you want to make sure the current branch pulls from origin
Run:
git branch --set-upstream-to=origin/<branch-name>

git branch --set-upstream-to=origin/main
---------------------------------------------------------------------
