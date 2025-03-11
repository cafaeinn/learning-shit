import express from "express";
import fs from "fs";
import path from 'path';
import { instagramGetUrl } from "instagram-url-direct";
import Tiktok from "@xct007/tiktok-scraper";

const router = express.Router();
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send("kontol");
});

app.listen(port, () => {
  console.log('bisa');
});

app.get('/instagram', async (req, res) => {
  try {
    const { url } = req.query;

    if(!url) return res.status(400).json({ error: "mana linknya monyet" });

    const data = await instagramGetUrl(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "gagal memek" })
    console.error
  }
})

app.get('/tiktok', async (req, res) => {
  try {
    const { url } = req.query;

    if(!url) return res.status(400).json({ error: "mana linknya monyet" });

    const dat = await Tiktok(url, {
      parse: true
    });
    res.json({
        author: {
          nickname: dat.author.nickname,
          id: dat.author.unique_id,
          sign: dat.author.signature,
          avatar: dat.author.avatar_medium
        },
        download: {
          cover: dat.download.covers,
          nowm: dat.download.nowm,
          wm: dat.download.wm
        }
    });
  } catch (error) {
    res.status(500).json({ error: "gagal memek" })
    console.error
  }
})