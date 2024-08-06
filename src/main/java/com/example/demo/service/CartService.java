package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Cart;
import com.example.demo.repository.CartRepo;

@Service
public class CartService {

    @Autowired
    private CartRepo cartRepo;

    public Cart addToCart(Cart cart) {
        return cartRepo.save(cart);
    }

    public List<Cart> getAllCarts() {
        return cartRepo.findAll();
    }

    public Cart getCartById(int cartId) {
        return cartRepo.findById(cartId).orElse(null);
    }

    public void updateCart(Cart cart) {
        cartRepo.save(cart);
    }

    public void deleteCart(int cartId) {
        cartRepo.deleteById(cartId);
    }
}
