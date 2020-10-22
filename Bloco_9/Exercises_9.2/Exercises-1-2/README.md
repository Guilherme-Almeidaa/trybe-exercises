Agora vamos tentar fazer as requisições a API usando fetch. Essa função recebe dois parâmetros.
O endereço para o qual a requisição será feita, ou seja, a url do serviço.
Um objeto contendo as especificações da requisição. Para essa API, atribuiremos a esse objeto as chaves method e headers.
A função fetch é uma Promise e, como tal, dependendo de seus desdobramentos, podemos encadear procedimentos a serem feitos, utilizando as cláusulas .then(em caso de sucesso) e .catch(em caso de falha). A requisição fetch retorna um objeto Response. Utilizando .then, verifique a estrutura da resposta usando um console.log na response retornada pelo fetch.
Viu a reponse? Até recebemos uma resposta do serviço, mas como é que eu consigo retirar o texto da piada daí ?

<strong>Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página!<strong>
