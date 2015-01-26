package controllers

import (
	"net/http"

	"github.com/adampresley/GoHttpService"
)

func Index(writer http.ResponseWriter, request *http.Request) {
	err := GoHttpService.RenderHtml(writer, "www/index")
	if err != nil {
		GoHttpService.Error(writer, err.Error())
	}
}
