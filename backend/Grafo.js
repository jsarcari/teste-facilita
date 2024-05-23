class Grafo {
    constructor() {
        this.vertices = {};
    }

    adicionarVertice(vertice) {
        this.vertices[vertice] = {"visitado":false};
    }

    adicionarAresta(vertice1, vertice2) {
        const distancia = this.calcularDistancia(vertice1, vertice2);
        this.vertices[vertice1][vertice2] = distancia;
        this.vertices[vertice2][vertice1] = distancia;
    }

    calcularDistancia(vertice1, vertice2) {
        const dx = vertice2[0] - vertice1[0];
        const dy = vertice2[1] - vertice1[1];
        return Math.sqrt(dx*dx + dy*dy);
    }

    obterVizinhos(vertice) {
        return this.vertices[vertice];
    }

    caminho() {
        var j=0;
        var proximo = Object.keys(this.vertices)[j];
        const tamanho = Object.keys(this.vertices).length;
        while (j<tamanho) {
            var vertice = Object.keys(this.vertices)[j];
            if(this.vertices[vertice].visitado === false && vertice === proximo) {
                var ponto = this.vertices[vertice];
                var menor = Object.values(ponto)[1];
                //proximo = Object.keys(this.vertices[vertice])[1];
                for (const aresta in ponto) {
                    /*(console.log(Object.values(this.vertices[vertice])[i])
                    if(Object.values(this.vertices[vertice])[i] < menor){
                        menor = Object.values(this.vertices[vertice])[i]
                    }*/
                    if (ponto[aresta] !== false && ponto[aresta]< menor) {
                        menor = ponto[aresta];
                        //this.vertices[vertice].visitado = true;
                        proximo = aresta;
                    }
                }
                this.vertices[vertice].visitado = true;
                console.log(proximo);
            }
            j++;
        }
    }
}

module.exports = { Grafo }