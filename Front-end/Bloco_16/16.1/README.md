1 - Defina uma função chamada actionCreator()que retorne o actionobjeto quando chamada.

2- Despache a LOGINação para a loja Redux chamando o dispatchmétodo e passe a ação criada por loginAction().

3- O editor de código tem o exemplo anterior, bem como o início de uma reducerfunção para você. Preencha o corpo da reducerfunção para que, se receber uma ação do tipo, 'LOGIN'ela retorne um objeto de estado com logindefinido como true. Caso contrário, ele retorna o atual state. Observe que o atual statee o despachado actionsão passados ​​para o redutor, para que você possa acessar o tipo da ação diretamente com action.type.

4- Preencha a reducerfunção para lidar com várias ações de autenticação. Use uma switchinstrução JavaScript no reducerpara responder a diferentes eventos de ação.

5- Declare LOGINe LOGOUTcomo constvalores e atribua-os às strings 'LOGIN'e 'LOGOUT', respectivamente. Em seguida, edite o authReducer()e os criadores de ação para fazer referência a essas constantes em vez de valores de string.

6- Escreva uma função de retorno de chamada que aumente a variável global countsempre que o armazenamento receber uma ação e passe essa função para o store.subscribe()método. Você verá que store.dispatch()é chamado três vezes seguidas, cada vez passando diretamente um objeto de ação. Observe a saída do console entre os despachos de ação para ver as atualizações ocorrendo.

7 - Termine de escrever a rootReducer()função usando o Redux.combineReducers()método. Atribuir counterReducera uma tecla chamada counte authReducera uma tecla chamada auth.

8- Conclua o corpo da addNoteText()função para que ele retorne um actionobjeto. O objeto deve incluir uma typepropriedade com um valor de ADD_NOTEe também uma textpropriedade definida para os notedados que são passados ​​para o criador da ação. Ao chamar o criador da ação, você passará informações específicas da nota que pode acessar para o objeto.
Em seguida, termine de escrever a switchdeclaração no notesReducer(). Você precisa adicionar um caso que lida com as addNoteText()ações. Este caso deve ser acionado sempre que houver uma ação do tipo ADD_NOTEe deve retornar a textpropriedade na entrada actioncomo nova state.

9- Nesta lição, você implementará um contador simples com Redux do zero. O básico é fornecido no editor de código, mas você terá que preencher os detalhes! Use os nomes que são fornecidos e definir incActione decActionação criadores, os counterReducer(), INCREMENTe DECREMENTtipos de ação, e finalmente o Redux store. Quando terminar, você poderá despachar INCREMENTou DECREMENTações para aumentar ou diminuir o estado mantido no store. Boa sorte construindo seu primeiro aplicativo Redux!

10- Existe um storee reducerno editor de código para gerenciar itens de tarefas pendentes. Termine de escrever o ADD_TO_DOcaso no redutor para anexar uma nova tarefa ao estado. Existem algumas maneiras de fazer isso com JavaScript ou ES6 padrão. Veja se você consegue encontrar uma maneira de retornar uma nova matriz com o item de action.todoanexado ao final.

11- Use o operador spread para retornar uma nova cópia do estado quando uma tarefa é adicionada.

12- O redutor e o criador da ação foram modificados para remover um item de uma matriz com base no índice do item. Termine de escrever o redutor para que uma nova matriz de estado seja retornada com o item no índice específico removido.

13- O estado e as ações Redux foram modificados para lidar com um objectpara o state. Edite o código para retornar um novo stateobjeto para ações com tipo ONLINE, que define a statuspropriedade para a string online. Tente usar Object.assign()para completar o desafio.

