import cartList from "@/views/cart/cartChild/CartList";

export default {
    addCount(state,payload) {
        payload.count ++
    },
    addToCart(state,payload) {
        payload.checked = true
        state.cartList.push(payload)
    },
    changeCheckedState(state,payload) {
        payload.checked = !payload.checked
    },
    notSelectAll(state) {
        state.cartList.forEach(item=> {
            item.checked = false
        })
    },
    selectAll(state) {
        state.cartList.forEach(item=> {
            item.checked = true
        })
    }
}