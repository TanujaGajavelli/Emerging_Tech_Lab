use('Assignment-6')
// Question-2
// db.studentAcademicInfo.insertOne({
//     "rollno": 101,
//     "program": "B.Tech",
//     "branch": "Computer Science",
//     "cgpa": 8.8
// })


//Question-3
// db.studentAcademicInfo.insertMany([
//     {
//         "rollno": 102,
//         "program": "B.Tech",
//         "branch": "Mechanical Engineering",
//         "cgpa": 9.5
//     },
//     {
//         "rollno": 103,
//         "program": "B.Tech",
//         "branch": "Electrical Engineering",
//         "cgpa": 8.9
//     },
//     {
//         "rollno": 104,
//         "program": "B.Tech",
//         "branch": "Civil Engineering",
//         "cgpa": 7.7
//     },
//     {
//         "rollno": 105,
//         "program": "B.Tech",
//         "branch": "Electrical Engineering",
//         "cgpa": 9.0
//     },
//     {
//         "rollno": 106,
//         "program": "B.Tech",
//         "branch": "Information Technology",
//         "cgpa": 9.6
//     },
//     {
//         "rollno": 107,
//         "program": "M.Tech",
//         "branch": "Aerospace Engineering",
//         "cgpa": 9.9
//     },
//     {
//         "rollno": 108,
//         "program": "M.Tech",
//         "branch": "Biotechnology",
//         "cgpa": 8.8
//     },
//     {
//         "rollno": 109,
//         "program": "B.Tech",
//         "branch": "Computer Science",
//         "cgpa": 9.7
//     },
//     {
//         "rollno": 110,
//         "program": "B.Tech",
//         "branch": "Computer Science",
//         "cgpa": 9.0
//     }
// ])

//Question-4
db.studentAcademicInfo.find()

//Question-5
// db.studentAcademicInfo.find({"rollno":102})

//Question-8
// db.studentAcademicInfo.updateMany({"branch": "Computer Science"}, {$set: {"branch": "Computer Science and Engineering"}})

//Question-9
// db.studentAcademicInfo.find({"cgpa": {$gte: 9.0}})


//Question-10
// db.studentAcademicInfo.find({$and: [{"branch":"Computer Science and Engineering"}, {"cgpa": {$gt: 9}}]})

//Question-12
// db.studentAcademicInfo.find().sort({"cgpa": -1})

//Question-13
// db.studentAcademicInfo.aggregate([
//     {
//         $group: {
//             _id: "$branch",  
//             "number of students": {$sum:1}  
//         }
//     }
// ]);

//Question-14
// db.studentAcademicInfo.aggregate([
//     { 
//         $match: { 
//             "program": "M.Tech" 
//         } 
//     },
//     { 
//         $group: { 
//             _id: null,
//             count: { $sum: 1 }
//         } 
//     }
// ]);

//Question-15
// db.studentAcademicInfo.aggregate([
//     {
//         $group: {
//           _id: null,
//           "avg_cgpa": {
//             $avg: "$cgpa"
//           }
//         }
//     }
// ])
//Question-16
// db.studentAcademicInfo.aggregate([
//     {
//         $lookup: {
//           from: "studentInfo",
//           localField: "rollno",
//           foreignField: "rollno",
//           as: "stu"
//         }
//     },
//     {
//         $project: {
//             "_id": 0,
//             "stu.name": 1,
//             "rollno": 1,
//             "stu.mobile": 1,
//             "stu.email":1,
//             "stu.address.city": 1,
//             "stu.address.state": 1,
//             "stu.address.pin": 1,
//             "program":1,
//             "branch":1,
//             "cgpa":1
//         }
//     }
// ])

//Question-17
// db.studentAcademicInfo.aggregate([
//     {
//         $lookup: {
//           from: "studentInfo",
//           localField: "rollno",
//           foreignField: "rollno",
//           as: "stu"
//         }
//     },
//     {
//         $project: {
//           "_id": 0,
//           "stu.name": 1,
//           "rollno": 1,
//           "program":1,
//           "branch":1,
//           "cgpa":1
//         }
//     }
// ])

//Question-18
// db.studentAcademicInfo.aggregate([
//     {
//         $lookup: {
//             from: "studentInfo",
//             localField: "rollno",
//             foreignField: "rollno",
//             as: "stu"
//         }
//     },
//     { 
//         $match: { 
//             "stu.address.state": "Odisha" 
//         } 
//     },
//     {
//         $project: {
//             "_id": 0,
//             "rollno": 1,
//             "stu.name": 1,
//             "stu.address.city": 1,
//             "stu.address.state": 1,
//             "cgpa": 1
//         }
//     }
// ]);

//Question-19
// db.studentAcademicInfo.deleteOne({ "rollno": 109 });

//Question-20
// let MTech=db.studentAcademicInfo.distinct("rollno", { "program": "M.Tech" });
// db.studentAcademicInfo.deleteMany({ "rollno":{$in:MTech} });
// db.studentInfo.deleteMany({ "rollno":{$in:MTech} });
