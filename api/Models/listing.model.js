import mongoose from "mongoose";

const ListingSchema = mongoose.Schema({
listingType:{
  type:String,
},
listingPrice:{
  type:Number,
},
waterAndPowerInclusive:{
  type:Boolean,
},
location:{
  type:String,
}
})

export default Listing = mongoose.model('Listing',ListingSchema);