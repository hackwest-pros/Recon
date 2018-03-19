#!/usr/bin/env bash
for CIDR in $(cat ../subnets); do 
  echo scanning $CIDR ...;
  node $1.js $CIDR | bash; 
done
