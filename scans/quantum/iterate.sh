#!/usr/bin/env bash
for CIDR in $(cat ../hosts); do 
  echo scanning $CIDR ...;
  node $1.js $CIDR | bash; 
done
