const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;
const db = require("../../server").getDB;
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const Teacher = require("../../models/Teachers");

router.get("/", (req, res) => {
  Teacher.find()
    .sort({ date: -1 })
    .then((teachers) => res.json(teachers));
});

router.get("/search", (req, res) => {
  let Qualification = req.query.name;
  let Price = req.query.price;
  //console.log(Price);
  //let name = "Ali Aman";
  //req.query.name;
  console.log("search");

  //console.log(req.query.name);
  if (!Qualification) {
    Teacher.find({})
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else {
    Teacher.find({ Qualification })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  }
});

router.get("/searchbyid", (req, res) => {
  _id = req.query.id;
  console.log(_id);
  //console.log(req.query.name);
  if (_id) {
    Teacher.find({ _id })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else {
    console.log("erroxr");
  }
});

router.get("/dash", (req, res) => {
  let _id = req.query.id;

  console.log(_id);
  let Price = req.query.price;
  //console.log(Price);
  console.log("found teacher");

  //console.log(req.query.name);
  if (!_id) {
    Teacher.find({})
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else {
    Teacher.find({ _id })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  }
});

router.get("/search22222", (req, res) => {
  let Qualification = req.query.name;
  let Qualification2 = req.query.name;
  let Price = req.query.price;
  let Time = req.query.time;
  let Day = req.query.day;
  let sep = "_";
  let DayTime = Day + sep + Time;
  //let name = "Ali Aman";
  //req.query.name;
  console.log("search query:");
  console.log(DayTime);
  console.log(Qualification);
  console.log(Time);
  console.log(Day);
  console.log("---");
  //console.log(req.query.name);
  if (!Qualification && !Price && !Day && !Time) {
    Teacher.find({})
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else if (Qualification && !Price && !Day && !Time) {
    Teacher.find({ Qualification })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else if (Qualification && Price && !Day && !Time) {
    Teacher.find({ Qualification, Price })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else if (Qualification && Price && Day && !Time) {
    Teacher.find({ Qualification, Price, Day })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else if (Qualification && Price && !Day && Time) {
    Teacher.find({ Qualification, Price, Time })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  }
});
router.get("/search2", (req, res) => {
  let Qualification = req.query.name;
  let Price = req.query.price;
  let Time = req.query.time;
  let Day = req.query.day;
  let sep = "_";

  if (!Qualification && !Price && !Day && !Time) {
    Teacher.find({})
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else if (Qualification && !Price && !Day && !Time) {
    Teacher.find({
      $or: [
        { Qualification: Qualification },
        { Qualification2: Qualification },
      ],
    })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else if (Qualification && Price && !Day && !Time) {
    Teacher.find({
      $and: [
        {
          $or: [
            { Qualification: Qualification },
            { Qualification2: Qualification },
          ],
        },
        { Price: Price },
      ],
    })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else if (Qualification && Price && Day && !Time) {
    Teacher.find({
      $and: [
        {
          $or: [
            { Qualification: Qualification },
            { Qualification2: Qualification },
          ],
        },
        { Price: Price },
        { Day: Day },
      ],
    })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else if (Qualification && Price && !Day && Time) {
    Teacher.find({
      $and: [
        {
          $or: [
            { Qualification: Qualification },
            { Qualification2: Qualification },
          ],
        },
        { Price: Price },
        { Time: Time },
      ],
    })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else if (Qualification && Price && Day && Time) {
    Teacher.find({
      $and: [
        {
          $or: [
            { Qualification: Qualification },
            { Qualification2: Qualification },
          ],
        },
        { Price: Price },
        { Day: Day },
        { Time: Time },
      ],
    })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else if (Qualification && !Price && Day && Time) {
    Teacher.find({
      $and: [
        {
          $or: [
            { Qualification: Qualification },
            { Qualification2: Qualification },
          ],
        },
        { Day: Day },
        { Time: Time },
      ],
    })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else if (Qualification && !Price && !Day && Time) {
    Teacher.find({
      $and: [
        {
          $or: [
            { Qualification: Qualification },
            { Qualification2: Qualification },
          ],
        },
        { Time: Time },
      ],
    })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else if (Qualification && !Price && Day && !Time) {
    Teacher.find({
      $and: [
        {
          $or: [
            { Qualification: Qualification },
            { Qualification2: Qualification },
          ],
        },
        { Day: Day },
      ],
    })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  }
  // res.json();
});
//Add teacher schedule details to database
router.put("/ids", function (req, res) {
  var id = req.query.id;
  var email = "OKEMAIL";
  console.log("in ids");
  var data = {
    _id: new ObjectId(),
    Subject: "Chemistry",
    Day: "Friday",
    Date: "12/2/2020",
    Time: "3:00-4:00PM",
    Status: "Book",
  };
  console.log(id);
  Teacher.findOne({ _id: id }, function (err, foundObject) {
    if (err) {
      console.log(err);
    } else {
      if (!foundObject) {
        console.log(err);
      } else {
        if (req.query.email) {
          Teacher.updateOne(
            { _id: new ObjectId(id) },
            { $push: { schedule: data } },
            function (err, updatedObj) {
              if (err) {
                console.log(err);
              } else {
                console.log("Success");
              }
            }
          );
        }
      }
    }
  });
});

//Update the status of booking
router.put("/newx", function (req, res) {
  var id = req.query.id;
  var buttonid = req.query.buttonid;

  console.log(req.query.index, "index");
  console.log("buttonid:", buttonid);

  Teacher.updateOne(
    { _id: new ObjectId(id), "schedule._id": new ObjectId(buttonid) },
    { $set: { "schedule.$.Status": "Booked" } },

    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
        //  console.log(foundObject,"ans");
        // console.log("statusupdates");
      }
    }
  );
});

router.put("/nottoube", function (req, res) {
  var id = req.query.id;
  var buttonid = req.query.buttonid;

  console.log(req.query.index, "index");
  console.log("buttonid:", buttonid);

  Teacher.findOne(
    { _id: new ObjectId(id), "schedule._id": new ObjectId(buttonid) },
    { "schedule.$.Status": { $in: "Booked" } },

    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
        console.log(foundObject, "ans");
        // console.log("statusupdates");
      }
    }
  );
});
//Add Schedule
router.put("/add", function (req, res) {
  var id = req.query.id;
  var email = "OKEMAIL";
  console.log("in ids");
  var data = {
    _id: new ObjectId(),
    Subject: req.query.subjectname,
    Day: req.query.day,
    Date: req.query.date,
    Time: req.query.time,
    Price: req.query.price,
    Status: "Book",
  };
  console.log(data);
  Teacher.findOne({ _id: id }, function (err, foundObject) {
    if (err) {
      console.log(err);
    } else {
      if (!foundObject) {
        console.log(err);
      } else {
        if (req.query.id) {
          Teacher.updateOne(
            { _id: new ObjectId(id) },
            { $push: { schedule: data } },
            function (err, updatedObj) {
              if (err) {
                console.log(err);
              } else {
                res.status(200).json({
                  message: "schedule added",
                });
                console.log("Success");
              }
            }
          );
        }
      }
    }
  });
});
//Confirm button
router.put("/booked", function (req, res) {
  var id = req.query.id;
  var buttonid = req.query.buttonid;
  //console.log("bookid",buttonid);
  console.log(req.query.index, "index");
  console.log("buttonid:", buttonid);

  Teacher.findOne(
    { "schedule._id": new ObjectId(buttonid) },
    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
        console.log(foundObject.schedule._id, "SUBJ");
        if ((foundObject.schedule._id = buttonid)) {
          console.log(foundObject.schedule._id, "---------");

          var data = {
            _id: foundObject.schedule._id,
            Subject: req.query.Subject,
            Day: req.query.Day,
            Date: req.query.Date,
            Time: req.query.Time,
            Status: "Booked",
            Price: req.query.Price,
            Username: req.query.username,
            Classid: req.query.classid,
            Studentid: ObjectId(req.query.userid),
          };
          Teacher.updateOne(
            { _id: new ObjectId(id) },
            { $push: { bookings: data } },
            function (err, updatedObj) {
              if (err) {
                console.log(err);
              } else {
                console.log("Succefully add booking to teacher");
              }
            }
          );
        }
      }
    }
  );
});
//Deleting method
router.delete("/id", (req, res) => {
  Teacher.findById(req.params.id)
    .then((teacher) => teacher.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});
//Deleting method
router.delete("/teacherdelete", (req, res) => {
  console.log("HERE IN DELEE");
  Teacher.findById(req.query.id)
    .then((teacher) => teacher.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});
//DeleteSchedule
router.delete("/delete", function (req, res) {
  var id = req.query.id;
  var buttonid = req.query.buttonid; //schedule to be deleted obj id
  console.log("IM IN DELETE");
  console.log(id);
  console.log(buttonid);

  Teacher.updateOne(
    { _id: new ObjectId(id) },
    { $pull: { schedule: { _id: new ObjectId(buttonid) } } },

    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          message: "Schedule deleted",
        });
        console.log(foundObject, "ans");
        console.log("statusupdates");
      }
    }
  );
});
//Cancel
router.put("/cancel", function (req, res) {
  var id = req.query.id;
  var classid = req.query.classid;
  // console.log("emad");
  console.log(classid);
  Teacher.updateOne(
    { "bookings.Classid": classid },
    { $set: { "bookings.$.Status": "Cancelled" } },

    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
        //  console.log(foundObject,"ans");
        // console.log("statusupdates");
        console.log("cancel teacherrr");
      }
    }
  );
});
//cancel booking from userside
router.put("/cancel2", function (req, res) {
  var id = req.query.id; //classid or teacher booking id
  var classid = req.query.classid;
  // console.log("cancel");
  // console.log(buttonid);
  Teacher.updateOne(
    { "bookings.Classid": classid },
    { $set: { "bookings.$.Status": "Cancelled" } },

    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
        //  console.log(foundObject,"ans");
        // console.log("statusupdates");
        console.log("user cancelled");
      }
    }
  );
});
//Book
router.put("/book", function (req, res) {
  var id = req.query.id;
  var buttonid = req.query.buttonid;
  console.log("neha");
  console.log(buttonid);
  Teacher.updateOne(
    { "schedule._id": new ObjectId(buttonid) },
    { $set: { "schedule.$.Status": "Book" } },

    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
        //  console.log(foundObject,"ans");
        // console.log("statusupdates");
      }
    }
  );
});
router.put("/book2", function (req, res) {
  var id = req.query.id;
  var scheduleid = req.query.scheduleid;
  console.log("neha");
  // console.log(buttonid);
  Teacher.updateOne(
    { "schedule._id": new ObjectId(scheduleid) },
    { $set: { "schedule.$.Status": "Book" } },

    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
        //  console.log(foundObject,"ans");
        // console.log("statusupdates");
        console.log("book 2");
      }
    }
  );
});
router.put("/book3", function (req, res) {
  var id = req.query.id;
  var scheduleid = req.query.scheduleid;
  console.log("nehax", scheduleid);
  // console.log(buttonid);
  Teacher.updateOne(
    { "schedule._id": new ObjectId(scheduleid) },
    { $set: { "schedule.$.Status": "Book" } },

    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
        //  console.log(foundObject,"ans");
        // console.log("statusupdates");
        console.log("book 3");
      }
    }
  );
});
router.put("/end", function (req, res) {
  var id = req.query.id;
  var buttonid = req.query.buttonid;
  console.log("hiii2");
  console.log(buttonid);
  Teacher.updateOne(
    { "bookings._id": buttonid },
    { $set: { "bookings.$.Status": "Completed" } },

    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
        //  console.log(foundObject,"ans");
        // console.log("statusupdates");
      }
    }
  );
});
router.post("/asb", (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);

  const newTeacher = new Teacher({
    name: req.body.name,
    // Qualification: req.body.Qualification,
    // Qualification2: req.body.Qualification,
    // Rating: req.body.Rating,
    About: req.body.About,
    Price: req.body.Price,
    // DayTime: req.body.DayTime,
    // Day: req.body.Day,
    // Time: req.body.Time,
    age: req.body.age,
    email: req.body.email,
    password: req.body.password,
    subjects: req.body.subjects,
    City: req.query.City,
    bookings: req.body.bookings,
    schedule: req.body.schedule,
    education: req.body.education,
    work: req.body.work,
    // bookings: [
    //   // {
    //   //   Day:req.body.bookings[0].Day,
    //   //   Date: req.body.bookings[0].Date,
    //   //   Time: req.body.bookings[0].Time,
    //   //   Subject: req.body.bookings[0].Subject,
    //   //  Price: req.body.bookings[0].Price,
    //   //  Username: req.body.bookings[0].Username,
    //   //  Status: req.body.bookings[0].Status
    //   // }
    // ],
    // schedule:[
    //   // {
    //   //   Day:req.body.schedule[0].Day,
    //   //   Date: req.body.schedule[0].Date,
    //   //   Time: req.body.schedule[0].Time,
    //   //   Subject: req.body.schedule[0].Subject,
    //   //  Price: req.body.schedule[0].Price
    //   // }
    // ],
    // work: [
    //   // {
    //   //   title: req.body.work[0].title,
    //   //   startDate: req.body.work[0].startDate,
    //   //   endDate: req.body.work[0].endDate,
    //   //   details: req.body.work[0].details
    //   // }
    // ],
    // education: [],
    // //[
    //   //{
    //     // level: req.body.education[0].level,
    //     // institute:  req.body.education[0].institute,
    //     // startDate:  req.body.education[0].startDate,
    //     // endDate:  req.body.education[0].endDate,
    //     // field:  req.body.education[0].field
    //   //}
    // //],
  });
  if (!name || !email || !password) {
    return res.status(404).json({ msg: "please enter everthing" });
  }
  Teacher.findOne({ email })
    .then((teacher) => {
      if (teacher) {
        return res.status(400).json({
          msg: "teacher already exist",
        });
      }

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newTeacher.password, salt, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          }
          newTeacher.password = hash;
          newTeacher.save().then((teacher) => {
            console.log("hello im new");
            jwt.sign(
              {
                id: teacher.id,
              },
              config.get("jwtSecret"),
              //{ expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  token,
                  teacher: {
                    id: teacher.id,
                    name: teacher.name,
                    email: teacher.email,
                  },
                });
              }
            );
          });
        });
      });
    }) //.then ends

    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }); //.catch ends
});
router.put("/endclass", function (req, res) {
  var id = req.query.id;
  var classid = req.query.room;
  console.log("end class api");
  console.log(classid);
  Teacher.updateOne(
    { "bookings.Classid": classid },
    { $set: { "bookings.$.Status": "Completed" } },

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
