const AnimalesService = require("../app/services/Animales");

describe("Pruebas de unidad AnimalesService", () => {
    test("1: Acceso a todos los datos de la DB", () => {
        const totalAnimals = AnimalesService.getMultiple();
        expect(totalAnimals.length).toBe(10);
    });

    test("2: Acceso a los datos del animal 'Trucha Apache' (verificación 'UbicacioPreliminar')", () => {
        const animal = "Trucha apache";
        const datosAnimal = AnimalesService.getAnimal(animal);
        expect(datosAnimal[0].UbicacionPreliminar).toBe('Arizona, Estados Unidos');
    });

    test("3: Acceso a los datos del animal 'Ajolote' (verificación 'Causa de Peligro')", () => {
        const animal = "Ajolote";
        const datosAnimal = AnimalesService.getAnimal(animal);
        expect(datosAnimal[0].CausaDePeligro).toBe('Pérdida de hábitat, introducción de peces exóticos, sobreexplotación, contaminación y su consumo como alimento.');
    });
});