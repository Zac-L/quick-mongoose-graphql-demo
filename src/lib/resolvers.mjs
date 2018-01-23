export default {
    Query: {
        allCats: async(parent, args, { Cat }) => {
            const cats = await Cat.find();
            return cats.map(x => {
                x._id = x._id.toString();
                return x;
            });
        }
    },
    Mutation: {
        createCat: async(parent, name, { Cat }) => {
            const kitty = await new Cat(name).save();
            kitty._id = kitty._id.toString();
            return kitty;
        }
    }
};