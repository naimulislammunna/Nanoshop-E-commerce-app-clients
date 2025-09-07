import useCartData from "./useCartData";


const usePriceCalculation = () => {
    const { cartData} = useCartData();

    const productPrice = cartData.map(product => product?.price);
    const productQuantity = cartData.map(product => product?.quantity);

    const prices = productPrice.map((num, i) => num * productQuantity[i]);

    const totalPrice = prices.reduce((sum, price) => sum + price, 0);
    const totalQuantity = productQuantity.reduce((sum, quantity) => sum + quantity, 0);

    return { totalPrice, totalQuantity }
};

export default usePriceCalculation;