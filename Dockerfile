FROM openjdk:11-jdk-slim


WORKDIR /app          


COPY System1.java .     

RUN javac System1.java     


CMD ["java", "System1"]   