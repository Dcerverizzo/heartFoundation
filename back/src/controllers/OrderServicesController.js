const OrderServices = require('../models/OrderServices');
const User = require('../models/User');
const Exam = require('../models/Exams');


module.exports = {
    async index(req,res){
       const { orderService } = req.query;

       const orderServices = await OrderServices.find({})
       return res.json( orderServices );
    },

    async show(req,res){
        const { orderService } = req.query;
 
        const orderServices = await OrderServices.findOne().sort({ field: 'asc', _id: -1 }).limit(1)
           
        return res.json( orderServices );
     },    

    async store(req,res){

        const { patient } = req.body;
        const { doctor } = req.body;
        const { healthPlan } = req.body;
        const { collectPost } = req.body;
        const { user_id } = req.headers;
        const { exam_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User does not exist!'});
        }
        
        const orderServices = await OrderServices.create({
            doctor,
            healthPlan,
            patient,
            collectPost,
            user: user_id,
            exam: exam_id
        })

       const orderService = await orderServices.populate('exam').populate('user').execPopulate();

       return res.json( orderService);
    }

};