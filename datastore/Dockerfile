FROM ubuntu:latest

RUN apt-get update

RUN apt-get install -y default-jdk

# Set the JAVA_HOME environment variable
ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64

WORKDIR /app

ADD . /app

CMD ["./fuseki-server"]

