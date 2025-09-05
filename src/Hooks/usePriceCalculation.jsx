import useCartData from "./useCartData";


const usePriceCalculation = () => {
    const { cartData } = useCartData();

    const productPrice = cartData.map(product => product.productPrice)
    const productQuantity = cartData.map(product => product.quantity)
    const prices = productPrice.reduce((sum, price) => sum + price, 0);
    const totalQuantity = productQuantity.reduce((sum, quantity) => sum + quantity, 0);

    return { prices, totalQuantity }
};

export default usePriceCalculation;