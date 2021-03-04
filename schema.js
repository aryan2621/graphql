const { buildSchema } = require("graphql");

const schema = buildSchema(`
type Course {
    id:ID
    courseName :String
    category :String
    price:Int
    language :String
    email :String
    stack :Stack
    teachingAssists:[TeachingAssists]


}
type TeachingAssists{
    firstName :String
    lasttName :String
experience  :Int

}
enum  Stack{
    WEB
    MOBILE
    OTHERS
}
type Query{
    getCourse(id:ID):Course
}
input CourseInput{
    id:ID
    courseName :String!
    category :String
    price:Int!
    language :String
    email :String
    stack :Stack!
    teachingAssists:[TeachingAssistsInput]
    
}
input TeachingAssistsInput{
    firstName :String
    lasttName :String
experience  :Int
}
type Mutation {
    createCourse(input:CourseInput):Course
}
`);
module.exports.schema = schema;
