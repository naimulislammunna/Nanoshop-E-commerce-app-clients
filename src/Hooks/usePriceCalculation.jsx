import { useState } from "react";
import useCartData from "./useCartData";


const usePriceCalculation = () => {
    const { cartData } = useCartData();

    const productPrice = cartData.map(product => product?.price);
    const productQuantity = cartData.map(product => product?.quantity);

    const prices = productPrice.map((num, i) => num * productQuantity[i]);
    const sumOfPrice = prices.reduce((sum, price) => sum + price, 0);
    const shippingCharge = 25;
    const subtotal = (sumOfPrice + shippingCharge).toFixed(2);
    const [totalPrice, setTotalPrice] = useState(subtotal);

    const totalQuantity = productQuantity.reduce((sum, quantity) => sum + quantity, 0);

    const [discountPrice, setDiscountPrice] = useState(0);

    const handleDiscountPrice = (discountValue) => {
        if (discountValue == "MERN") {
            const discount = (totalPrice * 0.1).toFixed(2);
            setDiscountPrice(discount);
            const totalPriceAfterDiscount = (totalPrice - discount) + shippingCharge;
            setTotalPrice(totalPriceAfterDiscount);
        }

    }

    return { totalPrice, sumOfPrice, totalQuantity, discountPrice, shippingCharge, handleDiscountPrice }
};

export default usePriceCalculation;