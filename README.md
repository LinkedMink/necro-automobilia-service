# Necro Automobilia Service
## Project Overview
This apps seeks to assign a mortality rating to driving a vehicle for to any particular location in 
the United States (see [Micromorts](https://en.wikipedia.org/wiki/Micromort)). The application uses 
a machine learning algorithm to produce a plane of predicted risk. This risk is then used to 
calculate the risk or routes or locations.

### Data Sources
Currently, the application uses historical data from the NHTSA to calculate risk. There are plans 
to produce a model that evolves with conditions (weather, traffic, etc.) that will adjust at regular 
intervals, so people can compare there risk over time.

## Microservice Collection
This project is part of a collection of microservices for supporting a larger project.

These services include:
* [Node User Service](https://github.com/LinkedMink/node-user-service)
* [Node Base Service](https://github.com/LinkedMink/node-base-service)
* [Necro Automobilia Service](https://github.com/LinkedMink/necro-automobilia-service)

## Getting Started
### Install Prerequisites 
#### Required
The application was tested with these major versions:
* MongoDB 3.6
* Node.js 12

#### Recommended
* Docker
* Kubernetes Provider

This package doesn't target any specific platform or provider. Sample files for Kubernetes 
deployment will be included for Azure AKS.

Install the npm packages.

```sh
cd necro-automobilia-service
npm install -g cross-env
npm install
```

### Config
See [Node User Service](https://github.com/LinkedMink/node-user-service) for details about
generating a private/public key pair.

Create a .env file in the root of the project directory. A few environmental variables 
are required for the application to run.

```sh
MONGO_DB_CONNECTION_STRING=mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database.collection][?options]]
# The path to a file containing the JWT public key. 
JWT_SECRET_KEY_FILE=jwtRS256.key.pub
# A sensible name to give as the issuing authority and intended audience
# https://tools.ietf.org/html/rfc7519#section-4.1
JWT_AUDIENCE=client.[Your Domain]
JWT_ISSUER=api.[Your Domain]
```

The application should now be runnable locally.

```sh
npm start
```

### Deployment
Docker isn't required to run this service, but in a microservice architecture, use of containers 
has become ubiquitous. Create the Docker image and push it up to a Docker registry.

```sh
cd ./necro-automobilia-service
npm run containerize
docker push linkedmink/necro-automobilia-service
```

You can run the images directly for testing or simplicity.

```sh
docker run -d \
  -p 80:8080 \
  -e ALLOWED_ORIGINS=https://mydomain.com \
  -e MONGO_DB_CONNECTION_STRING=... \
  -e JWT_SECRET_KEY_FILE=... \
  -e JWT_AUDIENCE=... \
  -e JWT_ISSUER=... \
  --name necro-automobilia-service \
  linkedmink/necro-automobilia-service
```

The project contains a sample deployment.yaml file for deploying to a Kubernetes cluster. Edit the 
file as necessary. Then apply the changes to your cluster.

```sh
kubectl apply -f ./deployment.yaml
```
