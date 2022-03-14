const express = require('express');
const mongoose = require('mongoose');
const app=express()

function connect() {
    
return mongoose.connect("mongodb://127.0.0.1:27017/banking")
        };


const userSchema=new mongoose.Schema({
    first_name:{type:String,required:true},
    middle_name:{type:String,required:false},
    last_name:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true}, 
    gender:{type:String,required:false},
    type:{type:String,required:false, default:"customer"},
    
},
{
   
timestamps:true,
versionKey:false
}
)

const User=mongoose.model("user",userSchema)


const branchSchema=new mongoose.Schema({
    first_name:{type:String,required:true},
    IFSC:{type:String,required:false},
    MICR:{type:Number,required:true},

},
{
   
timestamps:true,
versionKey:false
}
)

const Branch=mongoose.model("branch",branchSchema)


const masterSchema=new mongoose.Schema({
    balance:{type:Number,required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    branch_id:{type:mongoose.Schema.Types.ObjectId,ref:"branch",required:true},


},
{
   
timestamps:true,
versionKey:false
}
)

const Master=mongoose.model("master",masterSchema)

const savingSchema=new mongoose.Schema({
    account_number:{type:Number,required:true},
    balance:{type:Number,required:true},
    interest:{type:Number,required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},



},
{
   
timestamps:true,
versionKey:false
}
)

const Saving=mongoose.model("saving",savingSchema)


const fixedSchema=new mongoose.Schema({
    // account_number:{type:Number,required:true},
    balance:{type:Number,required:true},
    interest:{type:Number,required:true},
    star_date:{type:String,required:true},
    maturityDate:{type:String,required:true},
    saving_id:{type:mongoose.Schema.Types.ObjectId,ref:"saving",required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},



},
{
   
timestamps:true,
versionKey:false
}
)

const Fixed=mongoose.model("fixed",fixedSchema)

app.get("/fixed",async(req,res)=>{
    try {
     const fixed=await Fixed.find().lean().exec()
     return res.send(fixed)
    } catch (error) {
       console.log(error.message); 
    }
 })
 
 app.post("/fixed",async(req,res)=>{
     try {
      const fixed=await Fixed.create(req.body)
      return res.send(fixed)
     } catch (error) {
        console.log(error.message); 
     }
  })
  app.get("/fixed/:id",async(req,res)=>{
     try {
      const fixed=await Fixed.findById(req.params.id).lean().exec()
 
      return res.send(fixed)
     } catch (error) {
        console.log(error.message); 
     }
  })
 
  app.patch("/fixed/:id",async(req,res)=>{
     try {
      const fixed=await Fixed.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
      
      return res.send(fixed)
     } catch (error) {
        console.log(error.message); 
     }
  })
 
  app.delete("/fixed/:id",async(req,res)=>{
     try {
      const fixed=await Fixed.findByIdAndDelete(req.params.id).lean().exec()
      
      return res.send(fixed)
     } catch (error) {
        console.log(error.message); 
     }
  })





app.get("/saving",async(req,res)=>{
    try {
     const saving=await Saving.find().lean().exec()
     return res.send(saving)
    } catch (error) {
       console.log(error.message); 
    }
 })
 
 app.post("/saving",async(req,res)=>{
     try {
      const saving=await Saving.create(req.body)
      return res.send(saving)
     } catch (error) {
        console.log(error.message); 
     }
  })
  app.get("/saving/:id",async(req,res)=>{
     try {
      const saving=await Saving.findById(req.params.id).lean().exec()
 
      return res.send(saving)
     } catch (error) {
        console.log(error.message); 
     }
  })
 
  app.patch("/saving/:id",async(req,res)=>{
     try {
      const saving=await Saving.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
      
      return res.send(saving)
     } catch (error) {
        console.log(error.message); 
     }
  })
 
  app.delete("/saving/:id",async(req,res)=>{
     try {
      const saving=await Saving.findByIdAndDelete(req.params.id).lean().exec()
      
      return res.send(saving)
     } catch (error) {
        console.log(error.message); 
     }
  })









app.get("/master",async(req,res)=>{
    try {
     const master=await Master.find().populate({path:"user_id",select:["first_name"]}).lean().exec()
     return res.send(master)
    } catch (error) {
       console.log(error.message); 
    }
 })
 
 app.post("/master",async(req,res)=>{
     try {
      const master=await Master.create(req.body)
      return res.send(master)
     } catch (error) {
        console.log(error.message); 
     }
  })
  app.get("/master/:id",async(req,res)=>{
     try {
      const master=await Master.findById(req.params.id).lean().exec()
 
      return res.send(master)
     } catch (error) {
        console.log(error.message); 
     }
  })
 
  app.patch("/master/:id",async(req,res)=>{
     try {
      const master=await Master.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
      
      return res.send(master)
     } catch (error) {
        console.log(error.message); 
     }
  })
 
  app.delete("/master/:id",async(req,res)=>{
     try {
      const master=await Master.findByIdAndDelete(req.params.id).lean().exec()
      
      return res.send(master)
     } catch (error) {
        console.log(error.message); 
     }
  })











app.get("/branch",async(req,res)=>{
    try {
     const branch=await Branch.find().lean().exec()
     return res.send(branch)
    } catch (error) {
       console.log(error.message); 
    }
 })
 
 app.post("/branch",async(req,res)=>{
     try {
      const branch=await Branch.create(req.body)
      return res.send(branch)
     } catch (error) {
        console.log(error.message); 
     }
  })
  app.get("/branch/:id",async(req,res)=>{
     try {
      const branch=await Branch.findById(req.params.id).lean().exec()
 
      return res.send(branch)
     } catch (error) {
        console.log(error.message); 
     }
  })
 
  app.patch("/branch/:id",async(req,res)=>{
     try {
      const branch=await Branch.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
      
      return res.send(branch)
     } catch (error) {
        console.log(error.message); 
     }
  })
 
  app.delete("/branch/:id",async(req,res)=>{
     try {
      const branch=await Branch.findByIdAndDelete(req.params.id).lean().exec()
      
      return res.send(branch)
     } catch (error) {
        console.log(error.message); 
     }
  })








app.get("/user",async(req,res)=>{
   try {
    const user=await User.find().lean().exec()
    return res.send(user)
   } catch (error) {
      console.log(error.message); 
   }
})

app.post("/user",async(req,res)=>{
    try {
     const user=await User.create(req.body)
     return res.send(user)
    } catch (error) {
       console.log(error.message); 
    }
 })
 app.get("/user/:id",async(req,res)=>{
    try {
     const user=await User.findById(req.params.id).lean().exec()

     return res.send(user)
    } catch (error) {
       console.log(error.message); 
    }
 })

 app.patch("/user/:id",async(req,res)=>{
    try {
     const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
     
     return res.send(user)
    } catch (error) {
       console.log(error.message); 
    }
 })

 app.delete("/user/:id",async(req,res)=>{
    try {
     const user=await User.findByIdAndDelete(req.params.id).lean().exec()
     
     return res.send(user)
    } catch (error) {
       console.log(error.message); 
    }
 })


app.listen(6267,async()=>{
    await connect()
    console.log(" 6267 port is done");
})