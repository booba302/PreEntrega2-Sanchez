let date = new Date().toLocaleDateString()
let time = new Date().toTimeString()

alert('Bienvenido al simulador de carrito de compra. \n \nFecha: ' + date + '\nHora: ' + time)
alert('Dependiendo si eres una persona o una empresa, el IVA será diferente.')
let type = parseInt(prompt('Ingrese la opción correspondiente: \n \n 1- Persona (IVA 14%). \n 2- Empresa (IVA 16%). \n 3- Salir del programa '))

const types = [1, 2, 3]

while (!types.includes(type)) {

    alert('Ha seleccionado una opción incorrecta. Por favor intentelo de nuevo')
    type = parseInt(prompt('Ingrese la opción correspondiente: \n \n 1- Persona natural (IVA 14%). \n 2- Persona jurídica (IVA 16%). \n 3- Salir del programa '))
}

let imp

menu(type)

function menu(type) {

    switch (type) {
        case 1:
            imp = 0.14
            productList()
            break
        case 2:
            imp = 0.16
            productList()
            break
        case 3:
            alert('Saliendo del sistema')
            break
    }
}

function productList() {

    let products = []

    addProduct(products)

    let newProduct = prompt('¿Desea agregar otro producto?\n\n- Si. \n- No. \n')
    const options = ['si', 'no', 'Si', 'No']

    while (!options.includes(newProduct)) {

        alert('No se ha seleccionado una opción correcta.\nPor favor, intentelo nuevamente')
        newProduct = prompt('¿Desea agregar otro producto?\n\n- Si. \n- No. \n')
    }

    const add = ['Si', 'si']

    while (add.includes(newProduct)) {

        addProduct(products)
        newProduct = prompt('¿Desea agregar otro producto?\n\n- Si. \n- No. \n')
    }

    let payment = (parseInt(prompt('El resumen de su compra es: \n' + summary(products) + '\n0) Continuar' + '\n\nIngrese 0 para continuar con el pago o si desea eliminar un producto ingrese el número correspondiente')))

    while (isNaN(payment) || payment < 0 || payment > products.length) {

        alert('No se ha seleccionado una opción correcta.\nPor favor intente nuevamente intente nuevamente')
        payment = (parseInt(prompt('El resumen de su compra es: \n' + summary(products) + '\n0) Continuar' + '\n\nIngrese 0 para continuar con el pago o si desea eliminar un producto ingrese el número correspondiente')))
    }

    while (payment > 0) {

        delProduct(products, payment)

        if (products.length == 0) {

            payment = null
            alert('No tienes productos en tu carrito.')

        } else {

            payment = (parseInt(prompt('El resumen de su compra es: \n' + summary(products) + '\n0) Continuar' + '\n\nIngrese 0 para continuar con el pago o si desea eliminar un producto ingrese el número correspondiente')))

        }
    }

    if (payment == null) {

        menu(3)

    } else {

        calc(products, imp)
        menu(3)
    }
}

function addProduct(products) {

    class Product {

        constructor(name, price) {
            this.name = name
            this.price = price
        }
        info() {

            console.log('El nombre del producto es: ' + name + ' y su precio es: ' + price);
        }
    }

    let name = prompt('Ingrese el nombre del producto')
    let price = parseInt(prompt('Ingrese el precio del producto'))

    while (isNaN(price) || price < 0) {

        alert('No se ha ingresado un valor numérico. Por favor itentelo de nuevo.')
        price = parseInt(prompt('Ingrese el precio del producto'))
    }

    products.push(new Product(name, price))

    return products
}

function delProduct(products, payment) {

    let del = payment - 1

    alert('El siguiente producto fue eliminado: ' + products[del].name + ' ' + products[del].price)

    products = products.splice(del, 1)

    return products
}

function summary(products) {

    let message = ''
    let nro = 1
    let resumen = ''

    products.forEach(product => {

        resumen = '\n' + nro + ') ' + product.name + ' ' + product.price + '$'
        message = message + resumen
        nro++
    })

    return message
}

function calc(products, imp) {

    let subTotal = 0
    let iva = 0
    let total = 0

    products.forEach(product => {

        subTotal = subTotal + product.price
    })

    iva = subTotal * imp
    total = subTotal + iva

    let cuotas = parseInt(prompt('¿En cuantas cuotas pagará?'))

    while (isNaN(cuotas) || cuotas <= 0) {

        alert('No se ha seleccionado una cantidad de cuotas correcta.\nIntente nuevamente')
        cuotas = parseInt(prompt('¿En cuantas cuotas pagará?'))
    }

    let cuota = total / cuotas

    alert('El resumen de su compra es el suguiente: \n\nSubtotal: ' + subTotal + '\nIva: ' + iva.toFixed(2) + '\nTotal: ' + total + '\nNro de cuotas: ' + cuotas + '\nCuotas: ' + cuota.toFixed(2))
}