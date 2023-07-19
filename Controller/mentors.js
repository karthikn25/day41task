import { ObjectId, client } from "../db.js";



export function createMentor(data){
    return client
    .db("guvi")
    .collection("mentors")
    .insertOne(data);
}
export function getAllMentors(req){
    return client
    .db("guvi")
    .collection("mentors")
    .find(req.query)
    .toArray();
    }

export function getMentorById(id){
  return client
  .db("guvi")
  .collection("mentors")
  .findOne({_id:new ObjectId(id)});
}    

export function editMentor(id,updatedata){
  return client
  .db('guvi')
  .collection("mentors")
  .findOneAndUpdate({_id:new ObjectId(id)},{$set:updatedata})
}

export function deletementor(id){
  return client
  .db("guvi")
  .collection("mentors")
  .findOneAndDelete({_id:new ObjectId(id)})
}

export function AddStudents(data){
    return client
    .db("guvi")
    .collection("mentors")
    .insertOne(data)
}