const AnimalesService = require("../app/services/Animales");

describe("Pruebas de unidad AnimalesService", () => {
    test("1: Acceso a todos los datos de la DB", () => {
        const totalAnimals = AnimalesService.getMultiple();
        expect(totalAnimals.length).toBe(18);
    });

    test("2: Acceso a los datos del animal 'Pez Totoaba' (verificación 'UbicacioPreliminar')", () => {
        const animal = "Pez Totoaba";
        const datosAnimal = AnimalesService.getAnimal(animal);
        expect(datosAnimal[0].UbicacionPreliminar).toBe('El Norte del Golfo de California de México.');
    });

    test("3: Acceso a los datos del animal 'Ajolote Mexicano' (verificación 'Causa de Peligro')", () => {
        const animal = "Ajolote Mexicano";
        const datosAnimal = AnimalesService.getAnimal(animal);
        expect(datosAnimal[0].CausaDePeligro).toBe('La pérdida de hábitat, su uso como mascotas exóticas, la contaminación, y su consumo como alimento.');
    });
});