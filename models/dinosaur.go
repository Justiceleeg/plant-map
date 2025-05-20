package models

type Dinosaur struct {
	Name        string
	Description string
}

var Dinosaurs = []Dinosaur{
	{
		Name:        "Aardonyx",
		Description: "An early stage in the evolution of sauropods.",
	},
	{
		Name:        "Abelisaurus",
		Description: "\"Abel's lizard\" has been reconstructed from a single skull.",
	},
	{
		Name:        "Abrictosaurus",
		Description: "An early relative of Heterodontosaurus.",
	},
	{
		Name:        "Abrosaurus",
		Description: "A close Asian relative of Camarasaurus.",
	},
	{
		Name:        "Abydosaurus",
		Description: "This sauropod's intact skull was discovered in 2010.",
	},
	{
		Name:        "Acanthopholis",
		Description: "No, it's not a city in Greece.",
	},
}
