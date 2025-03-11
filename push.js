import Tiktok from "@xct007/tiktok-scraper";

Tiktok("https://www.tiktok.com/@prabumotor_indonesia/video/7474944556224531719", {
    parse: true
})
    .then(r => {
        console.log(r)
    })