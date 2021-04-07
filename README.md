<h1 align="center">Distance Addresses</h1>

<p align="center">🚀 Api que recebe dois ou mais endereços e retorna a distância entre as combinações.
</p>
<b>Pré-requisitos</b>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disso você também precisa de uma credencial para usar API google (geocode)
### 🎲 Rodando o Back End (servidor)

```bash 
# Clone este repositório
$ git clone git@github.com:Sobral/distanceaddresses.git

# Acesse a pasta do projeto no terminal/cmd
$ cd distanceaddresses

# Instale as dependências
$ npm install

# adicione ao arquivo .env na raiz do projeto a credencial da api google
$ GOOGLE_API_KEY=<sua-credencial-api-google>

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta 3000


Faça um requisição GET passando o atributo 'addresses' no body conforme exemplo abaixo

{
	"addresses": [
    "Rua de exemplo 1",
    "Rua de exemplo 2
  ]
}
