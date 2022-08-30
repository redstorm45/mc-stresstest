

## MC stresstester

A stresstester for minecraft servers.

You want to know what load your server can handle ?
Have an estimate of how many players can be there at the same time ?
This might be for you !

## Quickstart

- Install docker and docker-compose
- Clone the repo
- Configure IP and PORT of your server in `docker-compose.yml`
- Configure how many bots to start in that same file
- Start everything with `docker-compose up`

## Bot behaviour

Currently, bots only do one thing: select a block far away (a million blocks) and try to pathfind there.

This behaviour is entirely defined in `scripts/wander.js`

## Server configuration

The server should be setup with option `offline-mode=false`, else you would need a lot of minecraft accounts to test this.

Warning: disabling authentification is a security risk, be sure that you disabled connections from the internet to your server while stress-testing it.

## Supported MC versions

All that are supported by `mineflayer`, check their repo for detailed info [here](https://github.com/PrismarineJS/mineflayer)
