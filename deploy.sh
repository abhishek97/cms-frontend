rm -rf tmp/
ember build --prod
scp -r dist/ root@ssh.alphanetbroadband.com:/var/www/cms-frontend/
