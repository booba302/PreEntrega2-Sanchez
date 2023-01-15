alert('Bienvenido al simulador de carrito de compra')

let type = prompt('Ingrese la opción correspondiente: \n \n 1- Persona natural (IVA 14%). \n 2- Persona jurídica (IVA 16%). \n 3- Salir del programa ')
type = parseInt(type)

const types = [1, 2, 3]

while (!types.includes(type)) {

    alert('Ha seleccionado una opción incorrecta. Por favor intentelo de nuevo')
    type = prompt('Ingrese la opción correspondiente: \n \n 1- Persona natural (IVA 14%). \n 2- Persona jurídica (IVA 16%). \n 3- Salir del programa ')
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
    let products = []

    let name = prompt('Ingrese el nombre del producto')
    let price = parseInt(prompt('Ingrese el precio del producto'))

    while (isNaN(price)) {

        alert('No se ha ingresado un valor numérico. Por favor itentelo de nuevo.')
        price = parseInt(prompt('Ingrese el precio del producto'))

    }

    products.push(newProducts(name, price))

    //subTotal = subTotal + product

    let newProduct = prompt('¿Desea agregar otro producto?\n\n- Si. \n- No. \n')

    const options = ['si', 'no', 'Si', 'No']

    while (!options.includes(newProduct)) {

        alert('No se ha seleccionado una opción correcta.\nPor favor, intentelo nuevamente')
        newProduct = prompt('¿Desea agregar otro producto?\n\n- Si. \n- No. \n')
    }

    while (newProduct == 'si' || newProduct == 'Si') {

        name = prompt('Ingrese el nombre del producto')
        price = parseInt(prompt('Ingrese el precio del producto'))

        while (isNaN(price)) {

            alert('No ha agregado un valor numérico, intente de nuevo.')
            price = parseInt(prompt('Ingrese el precio del producto'))
        }

        products.push(newProducts(name, price))

        newProduct = prompt('¿Desea agregar otro producto?\n\n- Si. \n- No. \n')
    }

    let nro = 1
    let message = summary(products, nro)

    let pay = parseInt(prompt('El resumen de su compra es: \n' + message + '\n0) Continuar' + '\n\nIngrese 0 para continuar con el pago o si desea eliminar un producto ingrese el número correspondiente'))

    while (isNaN(pay)) {

        alert('No se ha seleccionado una opción correcta.\nPor favor intente nuevamente intente nuevamente')
        pay = parseInt(prompt('El resumen de su compra es: \n' + message + '\n0) Continuar' + '\n\nIngrese 0 para continuar con el pago o si desea eliminar un producto ingrese el número correspondiente'))
    }

    while (pay >= 1 && pay <= 1 + products.length) {

        if (products.length = 0) {

            alert('No tienes productos agregados a tu carrito')
            menu(3)

        } else {

            del = pay - 1
            deleteProducts(products, del)
            message = summary(products, nro)
            pay = parseInt(prompt('El resumen de su compra es: \n' + message + '\n0) Continuar' + '\n\nIngrese 0 para continuar con el pago o si desea eliminar un producto ingrese el número correspondiente'))
        }
    }

    for (i = 0; i < products.length; i++) {

        subTotal = subTotal + products[i].price
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

    alert('El resumen de su compra es el suguiente: \n\nSubtotal: ' + subTotal + '\nIva: ' + iva.toFixed(2) + '\nTotal: ' + total + '\nNro de cuotas: ' + cuotas + '\nCuotas: ' + cuota.toFixed(2))

}

function newProducts(name, price) {

    class Product {
        constructor(name, price) {
            this.name = name
            this.price = price
        }
        info() {
            console.log('El nombre del producto es: ' + name + ' y su precio es: ' + price);
        }
    }

    return new Product(name, price)
}

function summary(products, nro) {

    let message = ''

    for (let i = 0; i < products.length; i++) {

        let resumen = '\n' + nro + ') ' + products[i].name + ' ' + products[i].price + '$'
        message = message + resumen

        nro++
    }

    return message
}

function deleteProducts(products, del) {

    products = products.splice(del, 1)
    return products
}