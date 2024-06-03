class Pilha {
  constructor() {
    this.qtdElementos = 0;
    this.formPilha = {
      pilha: document.getElementById('conteudo')
    };
  }

  estouroPilha(tipo) {
    if (tipo === 'push' && this.qtdElementos === 11) {
      alert('A pilha está cheia!!!');
      return false;
    }
    if (tipo === 'pop' && this.qtdElementos === 0) {
      alert('A pilha está vazia!!!');
      return false;
    }
    return true;
  }

  pushElemento() {
    if (this.estouroPilha('push')) {
      if (this.qtdElementos < 11) {
        const toco = document.createElement('div');
        toco.classList.add('toco');
        toco.style.transform = `rotate(${this.qtdElementos * 15}deg)`; // Rotaciona o toco de acordo com a posição na pilha
        this.formPilha.pilha.appendChild(toco);
        this.qtdElementos += 1;
      }
    }
    this.mostrarPilha();
  }

  popElemento() {
    if (this.estouroPilha('pop')) {
      if (this.qtdElementos > 0) {
        this.formPilha.pilha.removeChild(this.formPilha.pilha.lastChild);
        this.qtdElementos -= 1;
      }
    }
    this.mostrarPilha();
  }

  mostrarPilha() {
    const fogo = document.createElement('div');
    fogo.classList.add('fogo');

    while (this.formPilha.pilha.firstChild) {
      this.formPilha.pilha.removeChild(this.formPilha.pilha.firstChild);
    }

    for (let i = 0; i < this.qtdElementos; i++) {
      const toco = document.createElement('div');
      toco.classList.add('toco');
      this.formPilha.pilha.appendChild(toco);
    }

    if (this.qtdElementos === 11) {
      
      this.formPilha.pilha.appendChild(fogo);
    }
  }
}

const pilha = new Pilha();

document.getElementById('pushButton').addEventListener('click', () => {
  pilha.pushElemento();
});

document.getElementById('popButton').addEventListener('click', () => {
  pilha.popElemento();
});
