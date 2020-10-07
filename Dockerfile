FROM openjdk:8u181-alpine3.8

WORKDIR /

COPY target/uberjar/crud-0.1.0-SNAPSHOT-standalone.jar crud-0.1.0-SNAPSHOT-standalone.jar
EXPOSE 8080

CMD java -jar crud-0.1.0-SNAPSHOT-standalone.jar