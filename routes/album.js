const router = require("express").Router();

const album = require("../models/album.js")

router.post("/save", async (req, res) => {
    const newAlbum = album({
        name: req.body.name,
        imageURL: req.body.imageURL,
    });
    try {
        const savedAlbum = await newAlbum.save();
        res.status(200).send({ success: true, data: savedAlbum });
    } catch (error) {
        res.status(400).send({ success: false, msg: error });
    }
});


router.get("/getOne/:albumId", async (req, res) => {
    const filter = { _id: req.params.albumId };

    const cursor = await album.findOne(filter);
    console.log(cursor);
    if (cursor) {
        res.status(200).send({ success: true, data: cursor });
    } else {
        res.status(400).send({ success: true, msg: "No Data Found" });
    }
});

router.get("/getAllAlbums", async (req, res) => {
    const options = {};
    const cursor = await album.find(options).sort({ createdAt: 1 });
    if (cursor) {
        res.status(200).send({ success: true, data: cursor });
    } else {
        res.status(400).send({ success: false, msg: "No Data Found" });
    }
});


router.put("/update/:albumId", async (req, res) => {
    const filter = { _id: req.params.albumId };
    const options = {
        upsert: true,
        new: true,
    };
    try {
        const result = await album.findOneAndUpdate(
            filter,
            {
                name: req.body.name,
                imageURL: req.body.imageURL,
            },
            options
        );
        res.status(200).send({ success: true, data: result });
    } catch (error) {
        res.status(400).send({ success: false, msg: error });
    }
});
//delete to album details
router.delete("/delete/:albumId", async (req, res) => {
    const filter = { _id: req.params.albumId };

    const result = await album.deleteOne(filter);
    if (result.deletedCount === 1) {
        res.status(200).send({ success: true, msg: "Data Deleted", data: result });
    } else {
        res.status(400).send({ success: false, msg: "No Data Found" });
    }
});

module.exports = router