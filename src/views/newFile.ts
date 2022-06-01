import { useRoute } from 'vue-router';
import { useProducts } from '../stores/products';
import { useCart } from '../stores/cart';

export default await (async () => {
const currentRouteId: string = useRoute().params.product.toString();
const product = useProducts();

const cart = useCart();

product.fetchProduct(currentRouteId);
return (await import('vue')).defineComponent({
setup() {
() => {
// @ts-ignore
[];
// @ts-ignore
[product, cart];
};
return {};
},
});
})();
