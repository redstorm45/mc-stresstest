#!/bin/bash

echo "Trying to launch ${PLAYER_COUNT} bots"

trap 'trap " " SIGTERM; kill 0; wait' SIGINT SIGTERM

for i in `seq 1 ${PLAYER_COUNT}`;
do
    echo "Launch bot number $i"
    export PLAYER_NAME="bot-$i"
    node scripts/wander.js &
done

wait
