## Overview
Learning creating ionic app along with a python server.

## Getting started with ionic
 * Create an account in https://ionicframework.com/

## Useful ionic commands
 * ionic g page $page_name

## Running project
 * Start vagrant
  ```
    vagrant up
  ```
 * SSH into vagrant
  ```
    vagrant ssh
  ```
 * Shift to shared directory
  ```
    cd /vagrant
  ```
 * Start gunicorn server
  ```
    gunicorn -b 0.0.0.0:8000 --chdir /vagrant/lifetime-server/ things:app
  ```
 * Start sample lifetime ionic app
  ```
    cd lifetime
    sudo ionic serve
  ```
 * Open the chrome or any browser on the host to view the app
  ```
    http://localhost:8100

  ```

## Helpful documentation
 * [ionic](https://ionicframework.com/docs/)
 * [vagrant](https://www.vagrantup.com/docs/)
 * [falcon](https://falconframework.org/)
 * [falcon-req-res](http://falcon.readthedocs.io/en/stable/_modules/falcon/response.html#Response.append_header)
