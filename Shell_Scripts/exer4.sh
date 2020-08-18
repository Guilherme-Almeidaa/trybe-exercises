#!/bin/bash
read -p "Escreva aqui:" NOME;
if [ -f $NOME ]
    then
    echo "O caminho $NOME está habilitado!"
    fi
if [ -w $NOME ]  
    then
    echo "Você tem permissão de editar $NOME"
    else
    echo "Você não foi aturizado a editar $NOME"
    fi
