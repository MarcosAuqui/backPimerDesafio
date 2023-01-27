 import express from 'express'

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended:true}))

const products =[
    {nombre: 'producto1', id:'1', description: 'este es el 1'},
    {nombre: 'producto2', id:'2', description: 'este es el 2'},
    {nombre: 'producto3', id:'3', description: 'este es el 3'},
    {nombre: 'producto4', id:'4', description: 'este es el 4'},
    {nombre: 'producto5', id:'5', description: 'este es el 5'},
    {nombre: 'producto6', id:'6', description: 'este es el 6'},
    {nombre: 'producto7', id:'7', description: 'este es el 7'},
    {nombre: 'producto8', id:'8', description: 'este es el 8'},
    {nombre: 'producto9', id:'9', description: 'este es el 9'}
]

app.get('/products',(req, res)=>{
    console.log(req.query)
    const {limit} = req.query
    const listado =  products.slice(0, limit)
    res.send(listado)
})


app.get('/products/:id',(req, res)=>{
    const {id} = req.params
    const product = products.find(idProduct => idProduct.id === id)
    if(!product){
        return res.send(`No existe el producto de ID ${id}`)
    }
    res.send(product)
})


app.listen(PORT, err=>{
    if (err) console.log(err)
    console.log(`Puerto ${PORT}`)
})
