#!/bin/bash
NOME=$1
VALOR=`ls -l $NOME| wc -l`
VALORTOTAL=`expr $VALOR - 1`
if [ -d $NOME ]
    then
    echo "O $NOME tem $VALORTOTAL arquivos."
    else
    echo "O argumento não é um diretório!"
    fi
