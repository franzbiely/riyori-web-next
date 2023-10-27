scp -i ~/.ssh/ryori/ryori.pem -r .next ec2-user@52.195.232.67:~/riyori-web-next
ssh -i ~/.ssh/ryori/ryori.pem ec2-user@52.195.232.67 'pm2 restart 0'