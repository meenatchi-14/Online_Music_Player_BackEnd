const router = require("express").Router();

//
const artist = require("../models/artist.js")
router.post("/save", async (req, res) => {
    const newArtist = artist({
        name: req.body.name,
        imageURL: req.body.imageURL,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
    });
    try {
        const savedArtist = await newArtist.save();
        res.status(200).send({ success: true, artist: savedArtist });

    } catch (error) {
        res.status(400).send({ success: false, msg: error });
    }
});

router.get("/getOne/:artistId", async (req, res) => {
    const filter = { _id: req.params.artistId };

    const cursor = await artist.findOne(filter);

    if (cursor) {
        res.status(200).send({ success: true, data: cursor });
    } else {
        res.status(400).send({ success: false, msg: "No Data Found" });
    }
});

router.get("/getAllArtists", async (req, res) => {
    const options = {};
    const cursor = await artist.find(options).sort({ createdAt: 1 });
    if (cursor) {
        res.status(200).send({ success: true, data: cursor });
    } else {
        res.status(400).send({ success: false, msg: "No Data Found" })
    }
})

router.put("/update/:artistId", async (req, res) => {
    const filter = { _id: req.params.artistId };
    const options = {
        upsert: true,
        new: true,
    };
    try {
        const result = await artist.findOneAndUpdate(
            filter,
            {
                name: req.body.name,
                imageURL: req.body.imageURL,
                twitter: req.body.twitter,
                instagram: req.body.instagram,
            },
            options
        );
        res.status(200).send({ success: true, artist: result });
    } catch (error) {
        res.status(400).send({ success: false, msg: error });
    }
});

router.delete("/delete/:artistId", async (req, res) => {
    const filter = { _id: req.params.artistId };

    const result = await artist.deleteOne(filter);
    if (result.deletedCount === 1) {
        res.status(200).send({ success: true, msg: "Data Deleted", data: result });
    } else {
        res.status(400).send({ success: false, msg: "No Data Foundd" });
    }
});


module.exports = router