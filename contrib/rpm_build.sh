npm install
npm run build

TARBALL_NAME=reup-frontend

mkdir -p SOURCES
#git archive --format tar --output SOURCES/${TARBALL_NAME}.tar
tar -czvf SOURCES/${TARBALL_NAME}.tar src dist node_modules contrib/reup-frontend.service\
    package.json vite.config.ts tsconfig.node.json index.html

yum-builddep -y contrib/rpm.spec

rpmbuild -bb \
        --clean \
        --define "_topdir `pwd`" \
		--define "_name ${TARBALL_NAME}" \
        --define "_tarballname ${TARBALL_NAME}" \
        --define "_version 0.0.1" \
        --define "_description 'some _description'" \
        --define "_license 'some _license'" \
        --define "_url 'https://reup.market'" \
        --define "_release stable" \
        contrib/rpm.spec