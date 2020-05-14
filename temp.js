/*
create mongodb container:
docker pull mongo
docker run --name mongodb mongo
docker run -d -p 27017:27017 --name mongodb mongo

edit service:
change hostname to containername (both mongodb in our case) in .env file
change port to 27017

create container+link it to databse:
docker run -d --link mongodb:mongodb -p 1128:1128 --name review-container --rm review-img

seed database:
docker exec review-container node server/lib/seedStatic.js
(for some reason this generates error message but still works? look into if we have time)

common mistakes:
did you remember to build client with webpack
are both db and server containers running
did you update env file
update db index file using env file
did you npm install dotenv
*/
