import { kMaxLength } from 'buffer';
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter a Product name'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please Enter a Product description']
    },
    price: {
        type: Number,
        required: [true, 'Please Enter a Product price'],
        maxLength:[8, "Price cannot exceed 8 characters"]
    },
    rating: {
        type: Number,
        default: 0,
        required: [true, 'Please add a Ratings']
    },
    image: [
        {
            public_id:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        }
    }  
    ],
    category: {
         type: String,
         required: [true, 'Please add a category'],

    },
    stock: {
        type: Number,
        required: [true, 'Please Enter product Stock'],
        maxLength: [4, "Stock cannot exceed 4 characters"],
        default: 1
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
     {
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        comment: {
            type: String,
            required: true,
            maxLength: [500, "Comment cannot exceed 500 characters"]
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
      }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Product", productSchema)