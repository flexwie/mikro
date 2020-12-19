# mikro CLI

The `mikro CLI` is a little boilerplate and deployment helper for the `mikro` package.

## Installation
Its easiest to use with `npx`:
```
npx @flexwie/mikro init
```

## Usage
```
npx @flexwie/mikro init
```
Inits a new Mikro project im this directory.
| Flag | Default | Description
| --- | --- | --- |
| --stream | redis | The PubSub stream for the backend. Should be consistent accross all services. Possible values: `redis` and `kafka`
  
---
  
```
npx @flexwie/mikro new
```
Creates a new service instance with deployment options for Docker by default.
| Flag | Default | Description
| --- | --- | --- |
| --backend | mongodb | The backend storage service. Possible values: `mongodb` and `sqlite`