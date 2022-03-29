const express = require("express");

const mongoose = require("mongoose");

const app = express();

const connect = () => {
  mongoose.connect(
    " mongodb+srv://rauniyarsuraj:<password>@cluster0.mgwok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};

const userSchema =new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    gender: { type: String, required: false || "Female" },
    type: {
      type: String,
      required: false || "customer",
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("user", userSchema);

const branchDetail =new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    IFSC: { type: String, required: true },
    MICR: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Branch = mongoose.model("branch", branchDetail);

const MasterAccount =new mongoose.Schema(
  {
    balance: { type: Number, required: true },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userSchema",
        required:true,
    }
  },
  {
    timestamps: true,
  }
);

const Master = mongoose.model("master", MasterAccount);

const SavingsAccount =new mongoose.Schema(
  {
    accountNumber: { type: String, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Savings = mongoose.model("savings", SavingsAccount);

const FixedAccount =new mongoose.Schema(
  {
    accountNumber: { type: String, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    startDate: { type: Date, required: true },
    maturityDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Fixed = mongoose.model("fixed", FixedAccount);
//User Schema
app.get("/userSchema",async(req,res)=>{
    const userData = await User.find({firstName:1,lastName:1}).lean().exec()
    console.log(userData);
    return res.send(UserData)
})
app.listen(5000,async()=>{
    await connect();

    console.log("Port is working properly");
})