
    
    import mongoose from "mongoose";
    const userSchema = new mongoose.Schema({
        firstname: {
            type: String,
            required: [true, "First name field cannot be empty"],
            trim: true,
            maxlength: [20, "First name must be at most 20 characters long"]
        },
         
            lastname: {
                type : String,
                required : true , 
                trim : true ,
             
                max : 20


            },
            username: {
                type : String,
                required : true , 
                trim : true ,
               unique : true ,
               index : true ,
               lowercase : true 
            },
            email: {
                type : String,
                required : true , 
                trim : true ,
                 unique : true ,
                 lowercase : true
            },
            password: {
                type : String,
                required : true 
              
            },
            phone: {
                type : String,
                required : true 

            }
          
       
      });


      const user = mongoose.model('user',userSchema);


      export default user;
