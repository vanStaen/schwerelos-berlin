# schwerelos-berlin

Code hosted under: https://github.com/vanStaen/schwerelos-berlin
Server ip/port: http://3.73.5.114:5000/


## Deployment
### How to deploy on AWS EC2?

https://www.youtube.com/watch?v=oaK223BiTBU&t=549s
On the server, install `sudo yum install git`, `sudo yum install npm` and `sudo npm install pm2@latest`. Don't forget to `sudo` all commandos.

### Manage SSH

Generate ssh: `ssh-keygen -t rsa -C "YOUR_EMAIL"`
To show the ssh key (public) using linux: Move to ssh directory with `cd .ssh`, then show with `cat .ssh`.

### Run app on ec2

First close git repo with `git clone REPO_URL`.
`cd schwerelos-berlin`, `npm i` then `npm run server`.
To kill the never stopping process (pm2), look for the running app with `ps aux | grep PM2`, and stop the one you need with `kill -9 ID`


## Ressources
UI ressources for a future me:
- Tickets in CSS : https://www.webtopic.com/css-tickets-examples/