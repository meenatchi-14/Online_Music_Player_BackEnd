const router = require("express").Router();

const song = require("../models/song");

router.post("/save", async (req, res) => {
    const newSong = song({
        name: req.body.name,
        imageURL: req.body.imageURL,
        songURL: req.body.songURL,
        album: req.body.album,
        artist: req.body.artist,
        language: req.body.language,
        category: req.body.category,
    });
    try {
        const savedSong = await newSong.save();
        res.status(200).send({ success: true, song: savedSong });
    } catch (error) {
        res.status(400).send({ success: false, msg: error });
    }
});

router.get("/getOne/:songId", async (req, res) => {
    const filter = { _id: req.params.songId };

    const cursor = await song.findOne(filter);

    if (cursor) {
        res.status(200).send({ success: true, data: cursor });
    } else {
        res.status(400).send({ success: true, msg: "No Data Found" });
    }
});

router.get("/getAllSongs", async (req, res) => {
    const options = {};
    const cursor = await song.find(options).sort({ createdAt: 1 });
    if (cursor) {
        res.status(200).send({ success: true, data: cursor });
    } else {
        res.status(400).send({ success: true, msg: "No Data Found" });
    }
});


router.get("/getFavouritesSongs", async (req, res) => {
    const query = req.query.songId;
    res.send(query);
    res.status(200).send({ success: true, data: query });

});

router.put("/update/:songId", async (req, res) => {
    const filter = { _id: req.params.songId };
    const options = {
        upsert: true,
        new: true,
    };
    try {
        const result = await song.findOneAndUpdate(
            filter,
            {
                name: req.body.name,
                imageURL: req.body.imageURL,
                songUrl: req.body.songUrl,
                album: req.body.album,
                artist: req.body.artist,
                language: req.body.language,
                category: req.body.category,
            },
            options
        );
        res.status(200).send({ success: true, song: result });
    } catch (error) {
        res.status(400).send({ success: false, msg: error });
    }
});

router.delete("/delete/:songId", async (req, res) => {
    const filter = { _id: req.params.songId };

    const result = await song.deleteOne(filter);
    if (result.deletedCount === 1) {
        res.status(200).send({ success: true, msg: "Data Deleted", data: result });
    } else {
        res.status(400).send({ success: false, msg: "Data Not Found" });
    }
});


module.exports = router;