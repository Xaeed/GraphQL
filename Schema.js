const {  GraphQLObjectType,
         GraphQLInt,
         GraphQLList,
         GraphQLString,
         GraphQLSchema,
         GraphQLNonNull,
} = require('graphql');


const customers =[
    {'id':1,'name':'saeed butt','email':'saeedbutt320@outlook.com','age':25},
    {'id':3,'name':'saeed butt','email':'saeedbutt435@gmail.com','age':30},
    {'id':2,'name':'kaka butt','email':'saeedbutt@gmail.com','age':22},
    {'id':4,'name':'waheed butt','email':'saeedbutt320@gyahoo.com','age':34}
]
const CustomerType= new GraphQLObjectType({
    name:'Customer',

        fields:() => ({
            id: {type:GraphQLString},
            name: {type: GraphQLString},
            email: {type: GraphQLString},
            age: {type: GraphQLInt},
        })
    });

const RootQuery= new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        customer:{
            type:CustomerType,
            args:{
                id:{type:GraphQLString}
            },
            resolve(parentValue, args)
            {
                for(let i = 0;i < customers.length;i++)
                {
                    if(customers[i].id == args.id)
                    {
                        return customers[i];
                    }
                }
            },
            customers:{
                type: new GraphQLList(CustomerType),
        
                resolve(ParentValue,args)
                {
                    return customers;
                }

            }
            
        }
    }

});





module.exports = new GraphQLSchema({
    query: RootQuery
});

