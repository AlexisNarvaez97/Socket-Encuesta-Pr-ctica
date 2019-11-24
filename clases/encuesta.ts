export class EncuestaData {

    private preguntas: string[] = ['1', '2', '3', '4'];

    private valores: number[] = [0,0,0,0];

    constructor() {}

    getDataGrafica() {
        return [{ data: this.valores, label: "Preguntas"}];
    }

    incrementarValor(pregunta: string, valor: number) {
        for( let i in this.preguntas) {
            if (this.preguntas[i] === pregunta) {
                this.valores[i] += valor;
            }
        }
        return this.getDataGrafica();
    }


}