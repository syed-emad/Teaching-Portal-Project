const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const ObjectId = require("mongodb").ObjectID;
//User model
const Users = require("../../models/Users");

router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  //validation
  if (!name || !email || !password) {
    return res.status(404).json({ msg: "please enter everthing" });
  }
  //Check for exsisting user
  Users.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ msg: "user already exsist" });
    }
    const newUser = new User({
      name,
      email,
      password,
    });

    //salt is use to create password hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            {
              id: user.id,
            },
            config.get("jwtSecret"),
            //{ expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
});
//Deleting method
router.delete("/userdelete", (req, res) => {
  User.findById(req.query.id)
    .then((teacher) => teacher.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});
router.get("/", (req, res) => {
  Users.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});
router.get("/id", (req, res) => {
  let _id = req.query.id;
  console.log(_id, "IN ID");
  Users.find({ _id })
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

router.put("/classbooked", function (req, res) {
  var id = req.query.userid;
  var email = "OKEMAIL";
  console.log("in ids", id);
  console.log("HEREEEEEEEEEEEEEEEEEEEEEEE");
  var data = {
    _id: new ObjectId(),
    classid: ObjectId(req.query.buttonid),
    TeacherName: req.query.teachername,
    Subject: req.query.Subject,
    Day: req.query.Day,
    Date: req.query.Date,
    Time: req.query.Time,
    Price: req.query.Price,
    Status: "Booked",
    Classid: req.query.classid,
  };
  console.log(data);
  Users.findOne({ _id: id }, function (err, foundObject) {
    if (err) {
      console.log(err);
    } else {
      if (!foundObject) {
        console.log(err);
      } else {
        if (req.query.id) {
          console.log("Hi");
          Users.updateOne(
            { _id: new ObjectId(id) },
            { $push: { mybookings: data } },
            function (err, updatedObj) {
              if (err) {
                console.log(err);
              } else {
                console.log("Success", data);
                console.log("Succefully add booking to student");
              }
            }
          );
        }
      }
    }
  });
});

router.put("/cancel", function (req, res) {
  var id = req.query.id;
  var classid = req.query.classid;
  console.log("hiii2");
  console.log(classid);
  Users.updateOne(
    { "mybookings.Classid": classid },
    { $set: { "mybookings.$.Status": "Cancelled" } },

    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
        //  console.log(foundObject,"ans");
        // console.log("statusupdates");
        console.log("cancel userrrr");
      }
    }
  );
});

router.put("/cancel2", function (req, res) {
  var teacherid = req.query.id;
  var classid = req.query.classid;
  // console.log("hiii2");
  console.log(classid);
  Users.updateOne(
    { "mybookings.Classid": classid },
    { $set: { "mybookings.$.Status": "Cancelled" } },

    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
        //  console.log(foundObject,"ans");
        // console.log("statusupdates");
        console.log("teacher cancelled ");
      }
    }
  );
});
router.put("/endclass", function (req, res) {
  var id = req.query.id;
  var classid = req.query.room;
  console.log("end class api");
  console.log(classid);
  User.updateOne(
    { "mybookings.Classid": classid },
    { $set: { "mybookings.$.Status": "Completed" } },

    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
        //  console.log(foundObject,"ans");
        console.log("booking status=completed in teacher");
      }
    }
  );
});
module.exports = router;
