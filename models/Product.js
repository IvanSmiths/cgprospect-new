import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    asset: { type: String },
    scale: { type: String },
    location: { type: String },
    method: { type: String },
    image: { type: String, required: true },
    imageSec: { type: String, required: true },
    jpg2k: { type: String },
    jpg4k: { type: String },
    jpg8k: { type: String },
    png2k: { type: String },
    png4k: { type: String },
    png8k: { type: String },
    highPoly: { type: String },
    midPoly: { type: String },
    lowPoly: { type: String },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    reviews: [reviewSchema],
    featuredImage: { type: String },
    isFeatured: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
