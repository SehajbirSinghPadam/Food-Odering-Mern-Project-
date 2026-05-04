import mongoose from 'mongoose';
export const connectDb =  async ()=>{
    await mongoose.connect('mongodb+srv://singhsehajbir1906:Sehajbir911@cluster0.xy1mp.mongodb.net/food-del').then(()=>console.log("!!!    Db Connected Suceessfully    |||"));

}
