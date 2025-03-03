const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    creator: {
        type: schema.Types.ObjectId,
        ref: 'user',
        required : true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},{
    timestamps: true
})


const blogModel = mongoose.model("blog",blogSchema);


module.exports = blogModel;