rm -rf tmp/
ember build --prod
scp -r dist/ root@alphanetbroadband.com:/var/www/cms-frontend/
