package com.example.webpos.biz;

import com.example.webpos.db.PosDB;
import com.example.webpos.model.Cart;
import com.example.webpos.model.Item;
import com.example.webpos.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.ThreadLocalRandom;

@Component
public class PosServiceImp implements PosService, Serializable {

    private PosDB posDB;

    @Autowired
    public void setPosDB(PosDB posDB) {
        this.posDB = posDB;
    }


    @Override
    public Product randomProduct() {
        return products().get(ThreadLocalRandom.current().nextInt(0, products().size()));
    }

    @Override
    public void checkout(Cart cart) {

    }

    @Override
    public Cart add(Cart cart, Product product, int amount) {
        return add(cart, product.getId(), amount);
    }

    @Override
    public Cart add(Cart cart, String productId, int amount) {

        Product product = posDB.getProduct(productId);
        if (product == null) return cart;

        Item target = null;

        for(var item :cart.getItems()){
            if(Objects.equals(item.getProduct().getId(), product.getId())){
                target = item;
            }
        }

        if(target == null){
            target = new Item(product,0);
            cart.addItem(target);
        }

        var newquan = Math.max(target.getQuantity() + amount,0);
        if(newquan == 0) {
            cart.getItems().remove(target);
        }
        else{
            target.setQuantity(newquan);
        }

        return cart;
    }

    @Override
    public List<Product> products() {
        return posDB.getProducts();
    }
}
