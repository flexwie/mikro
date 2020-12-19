# @flexwie/mikro

![npm (scoped)](https://img.shields.io/npm/v/@flexwie/mikro)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/fosscom/mikro)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/fosscom/mikro/test?label=tests)

`mikro` aims to simplyfy developing microservices on nodejs by taking away the need to configure infrastructure. Simply write services with the framework and deploy them by ejecting the infrastructure for use with Docker or K8s. Read more on how to deploy `mikro` at [Deployment]('#deployment').

## Usage
Install the framework from npm:
```sh
npm install --save @flexwie/mikro
```

Then use it in your microservice like so:
```javascript
const { Mikro } = require('@flexwie/mikro')

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

// ... your mikroservice code here

// register your new service with the registry
mikro.register()

```

`mikro` will automatically send heath metrics to the registry in the background. You can then use `mikro`s functions to help with your service. See detailed information below.

### EventStream
`mikro` features an event stream for node communication and alerting.

```javascript
// publish an event
mikro.events.publish("testevent", {data: "test"})

// add a new subscriber to an event
mikro.events.subscribe("testevent", (err, data) => {
    console.log(data)
    /*
    {
        emitterName: "automatically-generated-name",
        timestamp: 123456789,
        data: "test"
    }
    */
})
```