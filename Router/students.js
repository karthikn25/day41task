import express from 'express';
import { createStudent, deleteStudent, getAllStudents, studentGetById, updateStudent } from '../Controller/students.js';

const router = express.Router();


//5)Write API to show all students for a particular mentor
router.get("/allstudents",async(req,res)=>{
    try {
       const data = await getAllStudents(req);
       if(!data){
        res.status(400).json({message:"Data Not Found"})
       }
       res.status(200).json({message:"data Found Sucessfully",data:data})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
})

router.get("/:id",async(req,res)=>{
try {
    const {id} = req.params;
    const data = await studentGetById(id);
     if(!data){
        res.status(400).json({message:"Data Not Found"})
    }
    res.status(200).json({message:"data Found Sucessfully",data:data})
} catch (error) {
    console.log(error)
    res.status(500).json({message:"Internal Server Error"})
}
})


//2)Write API to create Student
router.post("/addStudent",async(req,res)=>{
    try {
        const data = await createStudent(req.body)
        console.log(data)
        if(!data){
            res.status(400).json({message:"data Adding Error"})
        }
        res.status(200).json({message:"Data Added Sucessfully",data:data})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
})

//4)Select One Student and Assign one Mentor

router.put("/edit/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const updatedata = req.body;
        const updateddata = await updateStudent(id,updatedata)
        if(!updatedata){
            res.status(400).json({message:"data Update Error"})
        }
        res.status(200).json({message:"Data Updated Sucessfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
})


router.delete("/remove/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const data = await deleteStudent(id)
        if(!id || !data){
            res.status(400).json({message:"data not Found"})
        }
        res.status(200).json({message:"Data Deleted Sucessfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
})

export const studentRouter = router;