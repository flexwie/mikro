package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"os"

	"github.com/urfave/cli/v2"
)

type MikroServices struct {
	Services []Service `json:"services"`
}

type MikroStorageBackendType string

const (
	MongoDB MikroStorageBackendType = "mongodb"
	SQLite  MikroStorageBackendType = "sqlite"
)

type Service struct {
	Name           string `json:"name"`
	StorageBackend string `json:"storagebackend`
}

func main() {
	app := &cli.App{
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "stream",
				Value: "redis",
				Usage: "PubSub Event Backend",
			},
			&cli.StringFlag{
				Name:    "backend",
				Aliases: []string{"b"},
				Value:   "mongodb",
				Usage:   "Storage DB Server",
			},
		},
		Commands: []*cli.Command{
			{
				Name:  "init",
				Usage: "Create a mikro project in this folder",
				Action: func(c *cli.Context) error {
					fmt.Println("Creating a new mikroconfig.json...")

					msJSON := MikroServices{
						Services: []Service{},
					}

					file, err := json.MarshalIndent(msJSON, "", " ")
					if err != nil {
						return err
					}

					err = ioutil.WriteFile("mikroconfig.json", file, 0644)
					if err != nil {
						return err
					}

					fmt.Println("Done! You can add a service by running the new command!")
					return nil
				},
			},
			{
				Name:  "new",
				Usage: "Create a blank microservice",
				Action: func(c *cli.Context) error {
					fmt.Println("Creating a new microservice")

					// create the directory
					if c.NArg() > 0 {
						os.Mkdir(c.Args().Get(0), 0755)
					} else {
						return errors.New("Please provide a service name")
					}

					// create files
					indexFile := []byte("const Mikro = require('@flexwie/mikro')\n\nconst mikro = new Mikro()\n\n// your code here")
					packageFile := []byte("{\"name\": \"name\", \"dependencies\": {\"@flexwie/mikro\": \"latest\"}}")

					err := ioutil.WriteFile(fmt.Sprintf("./%s/index.js", c.Args().Get(0)), indexFile, 0644)
					if err != nil {
						return err
					}

					err = ioutil.WriteFile(fmt.Sprintf("./%s/package.json", c.Args().Get(0)), packageFile, 0644)
					if err != nil {
						return err
					}

					// add service to mikroconfig.json
					service := Service{
						Name:           c.Args().Get(0),
						StorageBackend: c.String("backend"),
					}

					jsonFile, err := os.Open("mikroconfig.json")
					if err != nil {
						return err
					}

					jsonBytes, err := ioutil.ReadAll(jsonFile)
					if err != nil {
						return err
					}
					defer jsonFile.Close()

					var msJSON MikroServices
					json.Unmarshal(jsonBytes, &msJSON)

					msJSON.Services = append(msJSON.Services, service)

					// write new mikroconfig.json to disk
					file, err := json.MarshalIndent(msJSON, "", " ")
					if err != nil {
						return err
					}

					err = ioutil.WriteFile("mikroconfig.json", file, 0644)
					if err != nil {
						return err
					}

					fmt.Println("Done! To start developing cd into the new directory and run npm i!")
					return nil

					return nil
				},
			},
		},
	}

	err := app.Run(os.Args)
	if err != nil {
		log.Fatal(err)
	}
}
