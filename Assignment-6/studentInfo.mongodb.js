// Question-2
use('Assignment-6')
// db.studentInfo.insertOne({
//     "name": "Rahul Sharma",
//     "rollno": 101,
//     "mobile": "9876543210",
//     "email": "rahul.sharma@example.com",
//     "address": {
//         "city": "Bhubaneswar",
//         "state": "Odisha",
//         "pin": "400001"
//     }
// })


//Question-3
// db.studentInfo.insertMany([
//     {
//         "name": "Priya Patel",
//         "rollno": 102,
//         "mobile": "8765432109",
//         "email": "priya.patel@example.com",
//         "address": {
//             "city": "Ahmedabad",
//             "state": "Gujarat",
//             "pin": "380001"
//         }
//     },
//     {
//         "name": "Sandeep Singh",
//         "rollno": 103,
//         "mobile": "7654321098",
//         "email": "sandeep.singh@example.com",
//         "address": {
//             "city": "Delhi",
//             "state": "Delhi",
//             "pin": "110001"
//         }
//     },
//     {
//         "name": "Neha Gupta",
//         "rollno": 104,
//         "mobile": "6543210987",
//         "email": "neha.gupta@example.com",
//         "address": {
//             "city": "Bangalore",
//             "state": "Karnataka",
//             "pin": "560001"
//         }
//     },
//     {
//         "name": "Rajesh Verma",
//         "rollno": 105,
//         "mobile": "5432109876",
//         "email": "rajesh.verma@example.com",
//         "address": {
//             "city": "Chennai",
//             "state": "Tamil Nadu",
//             "pin": "600001"
//         }
//     },
//     {
//         "name": "Anita Sharma",
//         "rollno": 106,
//         "mobile": "4321098765",
//         "email": "anita.sharma@example.com",
//         "address": {
//             "city": "Kolkata",
//             "state": "West Bengal",
//             "pin": "700001"
//         }
//     },
//     {
//         "name": "Amit Patel",
//         "rollno": 107,
//         "mobile": "3210987654",
//         "email": "amit.patel@example.com",
//         "address": {
//             "city": "Hyderabad",
//             "state": "Telangana",
//             "pin": "500001"
//         }
//     },
//     {
//         "name": "Deepa Singh",
//         "rollno": 108,
//         "mobile": "2109876543",
//         "email": "deepa.singh@example.com",
//         "address": {
//             "city": "Pune",
//             "state": "Maharashtra",
//             "pin": "411001"
//         }
//     },
//     {
//         "name": "Rajat Verma",
//         "rollno": 109,
//         "mobile": "1098765432",
//         "email": "rajat.verma@example.com",
//         "address": {
//             "city": "Jaipur",
//             "state": "Rajasthan",
//             "pin": "302001"
//         }
//     },
//     {
//         "name": "Pooja Gupta",
//         "rollno": 110,
//         "mobile": "9876543210",
//         "email": "pooja.gupta@example.com",
//         "address": {
//             "city": "Lucknow",
//             "state": "Uttar Pradesh",
//             "pin": "226001"
//         }
//     }
// ])


//Question-4
// db.studentInfo.find()

//Question-6
// db.studentInfo.updateOne({"rollno": 103}, {$set: {"mobile":"9876543211"}})

//Question-7
// db.studentInfo.updateOne({"rollno": 106}, {$set: {"address.city":"Cuttack","address.state":"Odisha"}})

//Question-11
// db.studentInfo.find({$or: [{"address.state":"Odisha"}, {"address.state":"Maharashtra"}, {"address.state":"Karnataka"}]})


//Question-19
// db.studentInfo.deleteOne({ "rollno": 109 });