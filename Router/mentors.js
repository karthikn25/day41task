import express from 'express';
import { AddStudents, createMentor, deletementor, editMentor, getAllMentors, getMentorById } from '../Controller/mentors.js';


const router = express.Router();


//1)Write API to create Mentor
router.post("/addmentor",async(req,res)=>{
    try {
        const data = await createMentor(req.body)
        if(!data){
            res.status(400).json({message:"data Adding error"})
        }
        res.status(200).json({message:"data Added Sucessfully",data:data})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
})

//3)i)Select one mentor and Add multiple Student 
router.post("/addStudents",async(req,res)=>{
    try {
        const data = await AddStudents(req.body);
        if(!data){
            res.status(400).json({message:"data not found"})
        }
        res.status(200).json({message:"data Added Sucessfully",data:data})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
})



router.put("/edit/:id", async(req,res)=>{
    try {
        const {id}=req.params;
        const updatedata = req.body;
        const data = await editMentor(id,updatedata);
     if(!data){
        res.status(400).json({message:"data not found"})
     }
     res.status(200).json({message:"data updated sucessfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"}) 
    }
})

router.delete("/delete/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const data = await deletementor(id)
        if(!data){
            res.status(400).json({message:"data not found"})
        }
        res.status(200).json({message:"data delete sucessfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"}) 
    }
})

export const mentorsRouter = router