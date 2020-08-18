#!/bin/bash
VALOR=$@
    if [ -d "$VALOR" ] 
    then
    FILE=`ls -l $VALOR | wc -l`
    echo "O arquivo $VALOR tem $FILE arquivos."
    else
    echo 'Não é um diretório'
    fi
