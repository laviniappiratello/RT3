//app.ts tbm seria um modulo ja que tambem exporta algo
import { Somador, Subtrador, Multiplicador, Divisor } from './operacoes/operacoes';
//caso eu tivesse um arquivo pra cada operacao eu criaria um index.ts 
//com esse conteudo aqui: 
//export * from './somador';
// export * from './subtrador';
// export * from './multiplicador';
// export * from './divisor';
// o index.ts serviria melhor se eu tivesse um arquivo pra cada operacao 
//pra caso de projetos maiores (pq fica mais facil de arrumar dps) 
// pq ele meio q pega todos e junta aqui

import * as readline from 'readline';
// importando as operacoes do arquivo e o readline que le os numeros q eu colocar

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// leitura do terminal

function perguntarNumeros() {
  rl.question('Digite o primeiro número: ', (numero1) => {
    rl.question('Digite o segundo número: ', (numero2) => {
      const num1 = parseFloat(numero1);
      const num2 = parseFloat(numero2);

      if (isNaN(num1) || isNaN(num2)) {
        console.log('Por favor, digite números válidos!');
        perguntarNumeros(); 
        //caso nao seja um numero ele pergunta dnv
        return;
      }
      // pergunta os numeros

      console.log('\nResultados:');
      console.log(`Soma: ${new Somador().calcular(num1, num2)}`);
      console.log(`Subtração: ${new Subtrador().calcular(num1, num2)}`);
      console.log(`Multiplicação: ${new Multiplicador().calcular(num1, num2)}`);
      // realiza as operações

      try {
        console.log(`Divisão: ${new Divisor().calcular(num1, num2)}`);
      } catch (error) {
        console.error(`Erro: ${(error as Error).message}`);
      }

      rl.close(); // fecha a interface
    });
  });
}

console.log('=== Calculadora de Operações Básicas ===');
perguntarNumeros();
// inicia o programa