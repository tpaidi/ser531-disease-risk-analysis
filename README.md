# Semantic Web Engineering Project

## Summary
This project integrates healthcare datasets into a single ontology to create a consistent and queryable dataset. Users can input specific parameters to retrieve data about the prevalence of COVID-19 or cardiovascular diseases among certain demographic groups.

Video Walkthrough: A video guide is available on YouTube <youtube link>.

## Application Functionality
With the application, users input parameters like age, cholesterol, glucose levels, and blood pressure to extract data from the dataset. The output includes the count of individuals with specified conditions and is displayed as a table and pie chart, illustrating the proportion of the total matching the criteria.

## Architecture
The project structure comprises three folders: server, client, and datastore.

### Datastore
Contains binaries for Apache Fuseki server, managing the triple store and SPARQL queries.

The datastore is hosted on AWS's EC2 server which can be found here- http://18.181.206.248:3030/#/ 

This website faces some downtime occasionally so obtion to visit it locally is described below-

#### Running Datastore
```bash
cd datastore
# Windows
run fuseki-server.bat
# Linux
run fuseki-server
```

### Server
Acts as a bridge between client and datastore, converting front-end parameters to SPARQL queries.

Running Server
```bash
cd server/diseaseprediction
# With Maven installed
mvn install
mvn spring-boot:run
```

### Client
Built with React + Vite, it provides the user interface.

Running Client
```bash
cd client
# With Node.js and npm installed
npm install
npm run dev
```
You can visit the website now on http://localhost:3000/

### Additional Resources
RDF Data File: Disease-Finder.rdf located in the root directory.
