//promesa
const clientes = [
{
    id: 1, 
    nombre : "Leonor"
},
{   id: 2, 
    nombre: "Jacinto"
},
{   id: 3, 
    nombre: "Waldo"
}];

const pagos = [
    {   id: 1, 
        pago: 1000, 
        moneda: "Bs"
    }, 
    {   id: 2,  
        pago: "1800", 
        moneda: "Bs"
    }];

const id = 2;

const getClientes = (id) => {

    return new Promise((resolve, reject) => {
        const cliente = clientes.find(c => c.id === id);
        if (cliente){
            resolve(cliente);
        } else {
            reject(`no existe el cliente con el id ${id}`);
        }
    });
};

 const getPagos = (id) =>{
    return new Promise((resolve, reject ) => {
        const pago = pagos.find(p => p.id === id);
        if(pago){
            resolve (pago);
        }else {
            reject(`no exixte el pago con el id ${id}`)
        }
    })
}

getClientes(id)
.then(cliente => console.log(cliente))
.catch(error => {
    console.log(error);
})

getPagos(id)
.then(pago => console.log(pago))
.catch(error =>{
    console.log(error);
} )

//promesa en cadena 
let nombre;
getClientes (id)
.then (cliente =>{
    
    nombrecliente = cliente.nombre;
    return getPagos(id );
})
.then(pago=>{
    console.log( 'El cliente:', nombrecliente, "pagó", pago['pago'], pago['moneda']);
})
.catch(error=> {
    console.log(error);
});

//async await
const getInfoClient =async (id) =>{
    try{
        const cliente = await getClientes(id);
        const pago = await getPagos(id);
        return `El pago del cliente ${cliente.nombre} es de ${pago['pago']} ${pago['moneda']}`;

    }
    catch(ex){
        throw ex;
    }
};

getInfoClient(id)
.then(msg => console.log(msg))
.catch(error => console.log(error))

//callback cliente
const getclientesById = (id,callback)=> {
    const cliente = cliente.find(cliente =>cliente.id === id)
    callback(cliente)
}

getclientesById(1, (clientes)=> {
    console.log("callback clientes", clientes);
})

//callback pagos

const getpagosById =(id, callback)=>{
    const pago = pagos.find(pagos => pagos.id === id)
        callback(pago);
}
getPagpsById(2, (pagos) => {
    console.log(" callback pagos:", pagos);
})
