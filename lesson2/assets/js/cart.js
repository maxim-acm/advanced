(function(window, $) {

    var Cart = function() {
        var domElems = {
            cart: $('.cart'),
            itemTmpl: $('.cart__item_tmpl'),
            totals: $('.cart .totals')
        };

        this.init = function () {
            var item1 = {
                id: 'a-12',
                name: 'Носки',
                price: '23.5',
                qty: '3',
                url: '#1'
            };

            this.addToCart(item1);
            this.addToCart(item1);

            this.viewCart();
        };

        this.addToCart = function (item) {
            ls.append(item, 'cart');
        };

        this.getCart = function () {
            return ls.getField('cart');
        };

        this.viewCart = function () {
            var __self = this;

            var list = this.getCart().map(function (item) {
                return __self.viewCartItem(item);
            });

            domElems.cart.html(list);
        };

        this.viewCartItem = function (item) {
            var newItem = domElems.itemTmpl.clone().removeClass('cart__item_tmpl');

            newItem.find('.quantity').html(item.qty);
            newItem.find('.itemName').html(item.name).attr('href', item.url);
            newItem.find('.price').html(item.price);

            return newItem;
        };

        this.init();
    };

    window.cart = new Cart();

})(window, jQuery);

var item1 = {
    id: 'a-12',
    name: 'Носки',
    price: '23.5',
    qty: '3',
    url: '#1'
};

cart.addToCart(item1);
cart.addToCart(item1);
