import Product from '../models/Product.js';
class productControllers{
    async addProduct(req, res){
        try{
            const { name, price, category, stock } = req.body;
            const product = await Product.create({ name, price, category, stock });
            return res.json(product);
        } catch(e) {
            console.error(e);
            return res.status(500).json({ error: e.message });
        }
    }
    
    async updateProduct(req, res){
        try{
            const {id} = req.params;
            const {name, price} = req.body;
            const product = await Product.findByIdAndUpdate (id, {name, price}, {new: true});   
            return res.json(product);   
        }catch(e){
            console.log(e); 
        }
    }
}

export default new productControllers();
