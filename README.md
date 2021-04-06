# distanceaddresses
Api que recebe dois ou mais endereços e retorna a distancia entre as combinações.


# Como usar ?

1 - Coloque sua chave do google geocode no arquivo .env (variável GOOGLE_API_KEY)
2 - instale as dependencias com o gerenciar de dependencias da sua preferencia (yarn install)
3 - execute yarn start 


Faça um requisição GET passando o atributo 'address' no body conforme exemplo abaixo

{
	"addresses": [
    "Rua de exemplo 1",
    "Rua de exemplo 2
  ]
}