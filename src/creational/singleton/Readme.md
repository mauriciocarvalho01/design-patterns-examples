### Fala pessoal!
A jornada do aprendizado na área de desenvolvimento é realmente longa, para uns traz a sensação de que não está aprendendo, e que precisa decorar todos os códigos. 
Alguns pensam que a quantidade de informações é exponencial, e tende ao infinito.
Eu concordo com a segunda afirmação! hahah 
Com a ressalva de que vamos estudar a vida inteira, e não vamos estar nem perto de absorver toda essa informação, logicamente.

Um dos conhecimentos mais valiosos que aprendi na universidade, foi estruturar as informações em padrões, e transformar os padrões em soluções lógicas **(Design Patterns)**. 

Fora da universidade eu me aventurei como instrutor em uma escola de programação, durante o curso de Ciência da Computação. Foi assim que aprendi a aprender, ensinando sem a pretensão de me tornar professor.

Vou explicar o básico para criarmos um **Pattern Singleton em Typescript**, e seus objetivos. 

### Segue!

O padrão Singleton é um dos padrões(Design patterns) mais utilizados, e está presentes na camada *criacional*, uma das camadas de design definidas pelo livro **“Design Patterns: Elements of Reusable Object-Oriented Software” de 1994, escrito por GOF (Gang of Four: Rich Gamma, Richard Helm, Ralph Johnson e John Vlissides)**.
Esse pattern assegura que somente uma instancia de uma determinada classe seja criado em todo o projeto. 

### Vejam uma implementação simples em Typescript:
```typescript
class Singleton {
    private static _instance: Singleton | null = null;
    private constructor(){}
    public static get instance(): Singleton {
        if (this._instance === null) {
            this._instance = new Singleton();
        }
        return this._instance;
    }
    anyMethod(): void {
        console.log("anyMethod")
    }
}

const singleton = Singleton.instance.anyMethod()

````

### Uso prático
É muito comum utilizar esse padrão para criarmos classes que vão ser chamadas diversas vezes no projeto.
Por exemplo uma conexão com o banco de dados: 
````typescript
class PgConnection {
    private static _instance: PgConnection | null = null;
    private constructor() { }
    public static get instance(): PgConnection {
        if (this._instance === null) {
            this._instance = new PgConnection();
        }
        return this._instance;
    }

    async connect(): Promise<void> {

    }

    async disconnect(): Promise<void> {

    }
}

const connection = PgConnection.instance
connection.connect()
connection.disconnect()
````

### Podemos oberservar que:
O construtor é privado
O método _instance() é público e estático
Retorna a única instância que é guardada em uma variável de classe

Desta forma, garante que uma classe tenha apenas uma **instância** e fornece um ponto global de acesso a ela.
O benefício principal de se usar esse pattern, é tornar fácil o acesso e gerência de recursos compartilhados, como variáveis globais. 

Referência:
Design Patterns: Elements of Reusable Object-Oriented Software” de 1994, escrito por GOF (Gang of Four: Rich Gamma, Richard Helm, Ralph Johnson e John Vlissides)
https://homepages.dcc.ufmg.br/~figueiredo/disciplinas/aulas/padroes-gof_v01.pdf

Github:
https://github.com/mauriciocarvalho01?tab=repositories