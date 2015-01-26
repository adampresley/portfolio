package listener

import (
	"fmt"
	"log"
	"net/http"

	"github.com/adampresley/portfolio/controllers"
	"github.com/adampresley/portfolio/global"
	"github.com/adampresley/portfolio/middleware"

	"github.com/gorilla/mux"
	"github.com/justinas/alice"
)

/*
Sets up and returns an HTTP server structure. This configures
middleware for logging and access control.
*/
func NewHttpListener(address string, port int) *http.Server {
	router := setupHttpRouter()

	server := alice.New(
		middleware.AccessControl,
		middleware.OptionsHandler,
		middleware.Logger).Then(router)

	listener := &http.Server{
		Addr:    fmt.Sprintf("%s:%d", address, port),
		Handler: server,
	}

	return listener
}

/*
Sets the HTTP routes
*/
func setupHttpRouter() http.Handler {
	router := mux.NewRouter()

	/* Static route */
	router.PathPrefix("/assets/").Handler(http.StripPrefix("/assets/", http.FileServer(http.Dir("./www/assets"))))

	/* Home */
	router.HandleFunc("/", homeController.Index).Methods("GET")

	return router
}

/*
Starts the HTTP listener and serves Service requests
*/
func StartHttpListener(httpListener *http.Server) error {
	log.Println("INFO - HTTP listener started on", httpListener.Addr)
	return httpListener.ListenAndServe()
}
