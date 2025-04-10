//o modulo é basicamente um arquivo que exporta algo 
//nesse caso o operacoes.ts seria o modulo q exporta as classes
//que fazem as operacoes
export class Somador {
    public calcular = (numero1: number, numero2: number): number => {
        return numero1 + numero2;
    }
}

export class Subtrador {
    public calcular = (numero1: number, numero2: number): number => {
        return numero1 - numero2;
    }
}

export class Multiplicador {
    public calcular = (numero1: number, numero2: number): number => {
        return numero1 * numero2;
    }
}

export class Divisor {
    public calcular = (numero1: number, numero2: number): number => {
        if (numero2 === 0) throw new Error("Divisão por zero não permitida");
        return numero1 / numero2;
    }
}

//criando as classes das operaçoes, que em um projeto real seriam
//criadas em arquivos separados mas como é projeto academico podem
//ser criadas todas no mesmo arquivo, pra manutencao seria melhor
//em arquivos separados