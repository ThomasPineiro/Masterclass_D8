# Master Class

## Les prérequis
* installer docker
    - ubuntu: https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce-1 -ou- https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04
    - mac: https://docs.docker.com/docker-for-mac/install/ -et(interface)- https://kitematic.com/ 
    - window: https://docs.docker.com/docker-for-windows/install/ -et(interface)- https://kitematic.com/
* installer docker compose
    - ubuntu: https://docs.docker.com/compose/install/#install-compose
    - mac: https://docs.docker.com/compose/install/#install-compose
    - window: https://docs.docker.com/compose/install/#install-compose

## Dans la stack

* PHP 7.1
* composer/drupal
* Apache 2.4
* MySQL 5.7
* phpMyAdmin


## Installation

fait a partir de de: https://github.com/pnglabz/docker-compose-lamp.git
    Les commandes:
```
1°) cd /Masterclass_D8
2°) sudo docker-compose build
3°) sudo docker-compose up -d
4°) sudo docker ps -> juste pour voire les containers

```
Le lien : `http://localhost:8000`.

## phpMyAdmin

http://localhost:8080/  
username: root  
password: root

## mise en place de drupal 

```
1°) sudo docker exec -it png-webserver /bin/bash -> se rendre dans l'image
2°) composer create-project drupal-composer/drupal-project:8.x-dev Drupal --stability dev --no-interaction
3°) composer require drush/drush
4°) composer require drupal/paragraphs
```
## theme drupal

```
1°) cd www/Drupal/
2°) linux : 'nautilus .'  mac: 'open .' windows: 'caca' 

```

https://www.drupal.org/docs/8/theming-drupal-8/drupal-8-theme-folder-structure

## créer votre branche

 Créer un /.gitignore (si il n'est pas dans l'arbre)
```
/.env
/.vscode
/config/*
/data/*
/logs/*
.DS_Store

```




