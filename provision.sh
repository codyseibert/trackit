# File: provision.sh
#!/bin/bash
curl -sL https://rpm.nodesource.com/setup_5.x | bash -
yum install -y nodejs rpmbuild git ruby
npm install -g grunt-cli bower
gem install sass
