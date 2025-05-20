package main

import (
	"github.com/gofiber/fiber/v3"
	"github.com/gofiber/fiber/v3/middleware/static"
	"plantmap.info/handlers"
)

func main() {
	app := fiber.New()

	app.Use("/static", static.New("./assets"))

	app.Get("/", handlers.DinosaurList).Get("/dinosaur/:name", handlers.DinosaurDetail)

	app.Listen(":3000")
}
