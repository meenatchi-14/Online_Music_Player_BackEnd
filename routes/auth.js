const router = require("express").Router();
const admin = require("../config/firebase.config");
const user = require("../models/users.js");
// login
router.get("/login", async (req, res) => {
    if (!req.headers.authorization) {
        return res.status(500).send({ message: "Invalid Token" });
    }
    const token = req.headers.authorization.split(" ")[1];
    try {
        const decodeValue = await admin.auth().verifyIdToken(token);
        if (!decodeValue) {
            return res.status(500).json({ message: "Un Authorize" });
        }
        // checking user email already exists or not
        const userExists = await user.findOne({ user_id: decodeValue.user_id });
        if (!userExists) {
            newUserData(decodeValue, req, res);
        } else {
            updateUserData(decodeValue, req, res);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error });
    }
});

const newUserData = async (decodeValue, req, res) => {
    const newUser = new user({
        name: decodeValue.name,
        email: decodeValue.email,
        imageURL: decodeValue.picture,
        user_id: decodeValue.user_id,
        email_verfied: decodeValue.email_verified,
        role: "member",
        auth_time: decodeValue.auth_time,
    });
    try {
        const savedUser = await newUser.save();
        res.status(200).send({ success: true, user: savedUser });
    } catch (err) {
        res.status(400).send({ success: false, msg: err });
    }
};
const updateUserData = async (decodeValue, req, res) => {
    const filter = { user_id: decodeValue.user_id };
    const options = {
        upsert: true,
        new: true,
    };
    try {
        const result = await user.findOneAndUpdate(
            filter,
            { auth_time: decodeValue.auth_time },
            options
        );
        res.status(200).send({ success: true, user: result });
    } catch (err) {
        res.status(400).send({ success: false, msg: err });
    }
};

// Get to all users
router.get("/getAllUsers", async (req, res) => {
    const options = {};
    const cursor = await user.find(options).sort({ createdAt: 1 });
    if (cursor) {
        res.status(200).send({ success: true, data: cursor });
    } else {
        res.status(400).send({ success: true, msg: "No Data Found" });
    }
});

//Update to role 
router.put("/updateRole/:userId", async (req, res) => {
    console.log(req.body.role, req.params.userId);
    const filter = { _id: req.params.userId };
    const role = req.body.data.role;
    const options = {
        upsert: true,
        new: true,
    };
    try {
        const result = await user.findOneAndUpdate(filter, { role: role }, options);
        res.status(200).send({ user: result });

    } catch (err) {
        res.status(400).send({ success: false, msg: err });
    }

});

//delete to user
router.delete("/delete/:userId", async (req, res) => {
    const filter = { _id: req.params.userId };
    const result = await user.deleteOne(filter);
    if (result.deletedCount === 1) {
        res.status(200).send({ success: true, msg: "Data Deleted", data: result });
    } else {
        res.status(400).send({ success: false, msg: "No Data Found" });
    }
});
module.exports = router;