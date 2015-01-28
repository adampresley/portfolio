package main

import (
	"log"

	"github.com/adampresley/portfolio/listener"
	"github.com/adampresley/portfolio/services/environmentService"
)

func main() {
	log.Println("INFO - Starting portfolio application...")
	var err error

	if err = listener.StartHttpListener(listener.NewHttpListener("", environmentService.GetHttpPort())); err != nil {
		log.Fatal("There was an error in starting the HTTP listener:", err.Error())
	}
}
