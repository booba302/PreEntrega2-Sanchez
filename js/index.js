let type = prompt('Bienvenido al simulador de cuotas \n \n Ingrese la opción correspondiente: \n \n 1- Persona natural (IVA 14%). \n 2- Persona jurídica (IVA 16%). \n')
type = parseInt(type)

while (type != 1 && type != 2 && type != 3) {

    alert('Seleccione una opción válida del menú a continuación')
    type = prompt('Bienvenido al simulador de carrito de compra \n \n Ingrese la opción correspondiente: \n \n 1- Persona natural (IVA 14%). \n 2- Persona jurídica (IVA 16%). \n')
    type = parseInt(type)
}

let imp

const menu = (type) => {
    switch (type) {
        case 1:
            imp = 0.14
            calc(imp)
            break
        case 2:
            imp = 0.16
            calc(imp)
            break
        case 3:
            alert('Saliendo del sistema')
            break
    }
}

menu(type)

function calc(imp) {

    let subTotal = 0
    let iva = 0
    let total = 0

    let product = prompt('Ingrese el valor del producto')
    product = parseInt(product)
    while (isNaN(product)) {

        alert('No ha agregado un valor numérico, intente de nuevo.')
        product = prompt('Ingrese el valor del producto')
        product = parseInt(product)
    }

    subTotal = subTotal + product

    let newProduct = prompt('¿Desea agregar otro producto?\n\n- Si. \n- No. \n')

    while (newProduct != 'si' && newProduct != 'no' && newProduct != 'Si' && newProduct != 'No'){
        alert('No se ha seleccionado una opción correcta.\nIntente nuevamente')
        newProduct = prompt('¿Desea agregar otro producto?\n\n- Si. \n- No. \n')
    }

    while (newProduct == 'si' || newProduct == 'Si') {

        newProduct = prompt('Ingrese el valor del producto')
        newProduct = parseInt(newProduct)

        while (isNaN(newProduct)) {

            alert('No ha agregado un valor numérico, intente de nuevo.')
            newProduct = prompt('Ingrese el valor del producto')
            newProduct = parseInt(newProduct)
        }

        subTotal = subTotal + newProduct

        newProduct = prompt('¿Desea agregar otro producto?\n\n- Si. \n- No. \n')
    }

    iva = subTotal * imp
    total = subTotal + iva

    let cuotas = prompt('¿En cuantas cuotas pagará?')
    cuotas = parseInt(cuotas)

    while (isNaN(cuotas) || cuotas <= 0) {
        alert('No se ha seleccionado una cantidad de cuotas correcta.\nIntente nuevamente')
        cuotas = prompt('¿En cuantas cuotas pagará?')
        cuotas = parseInt(cuotas)
    }

    let cuota = total / cuotas

    alert('El resumen de su compra es el suguiente: \n\nSubtotal: '+subTotal+'\nIva: '+iva.toFixed(2)+'\nTotal: '+total+'\nNro de cuotas: '+cuotas+'\nCuotas: '+cuota.toFixed(2))
    
}