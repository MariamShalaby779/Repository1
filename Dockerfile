<<<<<<< HEAD
FROM openjdk:11-jdk-slim


WORKDIR /app          


COPY System1.java .     

RUN javac System1.java     


CMD ["java", "System1"]   
=======
FROM alpine

WORKDIR /app

COPY index.js .

# Install nodejs & npm
RUN apk add --update nodejs npm

#  Install our project dependencies ( libraries ) 
RUN npm install express

# EXPOSE 8080 # Not necessary, only used to tell whoever is using the image that the application is listening to that port

CMD node index.js 
>>>>>>> 8da9087a2c9743e457a04deb7ede6af65b0f4c53
