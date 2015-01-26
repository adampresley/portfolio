package environmentService

import (
	"os"
	"strconv"
)

func GetHttpPort() int {
	port, _ := strconv.Atoi(os.Getenv("PORT"))
	return port
}
