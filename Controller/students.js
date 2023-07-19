import { ObjectId } from "bson";
import { client } from "../db.js";

//1)Write API to create Mentor

export function createStudent(data){
  return client
  .db("guvi")
  .collection("students")
  .insertOne(data);
}

export function studentGetById(id){
    return client
    .db("guvi")
    .collection("students")
    .findOne({_id:new ObjectId(id)});
}

export function getAllStudents(req){
return client
.db("guvi")
.collection("students")
.find(req.query)
.toArray();
}

export function updateStudent(id,updatedata){
    return client
    .db("guvi")
    .collection("students")
    .findOneAndUpdate({_id:new ObjectId(id)},{$set:updatedata})
} 

export function deleteStudent(id){
    return client
    .db("guvi")
    .collection("students")
    .findOneAndDelete({_id:new ObjectId(id)})
}

