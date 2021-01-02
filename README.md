# mikro

![npm (scoped)](https://img.shields.io/npm/v/mikro)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/flexwie/mikro)
![Tests](https://github.com/fosscom/mikro/workflows/Tests/badge.svg)

`mikro` aims to simplify developing microservices on nodejs by taking away the need to configure infrastructure. Simply write services with the framework and deploy them by ejecting the infrastructure for use with Docker or K8s. Read more on how to deploy `mikro` at [Deployment](#deployment).

## Usage
Install the framework from npm:
```sh
npm install --save mikro
```

Then use it in your microservice like so:
```javascript
const { Mikro } = require('mikro')

/*
create a new instance and configure it (optional)
first parameter is the name of your service, second are options for your environement
*/
const mikro = new Mikro('example', {
    redis: {        // redis connection details
        host: 'localhost',
        port: 6379,
        db: 0
    }
})

// ... your microservice code here

// register your new service with the registry
mikro.register()

```

You can use the included CLI to quickly create a boilerplate. For more information see the [CLI Readme](/cli).

```
npx mikro new service_name
```

`mikro` will automatically send health metrics to the registry in the background. You can then use `mikro`s functions to help with your service. See detailed information on usage in the wiki.

## Acknowledgements
This project is inspired by the microservice frameworks [micro](https://github.com/micro/micro) and [gizmo](https://github.com/nytimes/gizmo) in the golang ecosystem and tries to bring the best parts of those and more to NodeJS.
