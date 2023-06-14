const mongoose= require ("mongoose");


const userSalary = new mongoose.Schema(
  {
    Salary: {
      type: Number,
      required: true,
    },
    role: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Role", 
      required: true 
    },
  },
  {
    timestamps: true,
  }
);


const UserSalary = mongoose.model("UserSalary", userSalary);

module.exports = UserSalary;