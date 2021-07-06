//const precioOriginal = 220;
//const descuento = 15;
const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30
    },
    {
        name: "es_un_secreto",
        discount: 25
    }
];

function calcularPrecioConDescuento(precio, descuento) {

    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {

    const InputPrice = document.getElementById("InputPrice");
    const price = InputPrice.value;

    const InpunCoupon = document.getElementById("InputCoupon");
    const couponValue = InpunCoupon.value;

    const isCuponValueValid = (coupon) => {
        return coupon.name === couponValue;
    }

    const userCoupon = coupons.find(isCuponValueValid);

    if (!userCoupon) {
        alert("El Cupón " + couponValue + " no es válido")
    }else {
        const descuento = userCoupon.discount;

        const priceFinal = calcularPrecioConDescuento(price, descuento);
        const result = document.getElementById("response");
        result.innerText = `El precio con descuento es: $${priceFinal}`;
    }




}