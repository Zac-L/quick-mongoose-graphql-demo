import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    name: String
});

export default mongoose.model('Cat', schema);