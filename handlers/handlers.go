package handlers

import (
	"strings"

	"github.com/a-h/templ"
	"github.com/gofiber/fiber/v3"
	"plantmap.info/models"
	"plantmap.info/views/components"
)

func DinosaurList(c fiber.Ctx) error {
	component := components.DinosaurList(models.Dinosaurs)
	return Render(c, component)
}

func DinosaurDetail(c fiber.Ctx) error {
	var dinosaur models.Dinosaur
	for _, v := range models.Dinosaurs {
		if strings.EqualFold(strings.ToLower(v.Name), strings.ToLower(c.Params("name"))) {
			dinosaur = v
		}
	}
	component := components.DinosaurDetail(dinosaur)
	return Render(c, component)
}

func Render(c fiber.Ctx, component templ.Component) error {
	c.Set("Content-Type", "text/html")
	return component.Render(c.Context(), c.Response().BodyWriter())
}
