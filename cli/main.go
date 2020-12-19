package main

import (
	"fmt"
	"log"
	"os"

	"github.com/urfave/cli/v2"
)

func main() {
	app := &cli.App{
		Commands: []*cli.Command{
			{
				Name:  "old",
				Usage: "Create a very old blank microservice",
				Action: func(c *cli.Context) error {
					fmt.Println("old")
					return nil
				},
			},
			{
				Name:  "new",
				Usage: "Create a blank microservice",
				Action: func(c *cli.Context) error {
					fmt.Println("new")
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
