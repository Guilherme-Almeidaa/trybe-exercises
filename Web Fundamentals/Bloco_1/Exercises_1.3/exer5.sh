#!/bin/bash
    NOME=$1
    if [ -f $NOME ] 
    then
    echo "O $NOME é um arquivo comum."
    elif [ -d $NOME ]
    then
    echo "O $NOME é um diretório."
    else
    echo "O $NOME é outro tipo de aruqivo."
    fi
    echo `ls -l` $NOME