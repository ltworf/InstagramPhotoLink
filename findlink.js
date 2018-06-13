const createMediaLink = () => {

    const selectors = {
        // [media-selector, observe-selector]
        video: ['.tWeCl', '._97aPb video'],
        img: ['.FFVAD', '._97aPb']
    };

    const mediaTypes = {
        attributes: 'video',
        childList: 'img'
    };

    let params;

    const mo = new MutationObserver(mutations => mutations.forEach(mutation => {
        const mediaType = mediaTypes[mutation.type];
        params = [...selectors[mediaType], mutation.type];
        addOrUpdate(false, ...params);
    }));

    return (
        addOrUpdate(mo, ...selectors['img'], 'childList') ||
        addOrUpdate(mo, ...selectors['video'], 'attributes')
    );
}

const addOrUpdate = (mo, mediaSelector, observeSelector, attr) => {

    let media = document.querySelector(mediaSelector);

    if (!media) { return false; }

    if (mo) {
        // the nearest div to the media that stays there when switching prev/next
        const moi = {
            subtree: true
        };
        moi[attr] = true;
        var observable = document.querySelector(observeSelector);
        mo.observe(observable, moi);
    }

    setTimeout(() => addOrUpdateMediaLink(media.src, media.localName), 100);

    return true;
}


const addOrUpdateMediaLink = (src, mediaType) => {
    console.log(`src: ${src}`);

    let a = document.querySelector('._open_');
    if (!a) {
        a = document.createElement("a");
        [
            a.className,
            a.textContent,
            a.target
        ] =
        [
            "_open_",
            `Open ${mediaType == 'img' ? 'image' : mediaType} in new tab`,
            "_blank"
        ];

        // media container
        document.querySelector("._97aPb").appendChild(a);
    }

    if (src.startsWith('blob:')) {
        a.textContent = 'No direct link'
    }

    a.href = src;
}

setTimeout(() => createMediaLink(), 100);


