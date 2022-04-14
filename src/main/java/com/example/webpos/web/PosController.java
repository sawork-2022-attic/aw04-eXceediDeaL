package com.example.webpos.web;

import com.example.webpos.biz.PosService;
import com.example.webpos.model.Cart;
import com.example.webpos.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;

@Controller
public class PosController {

    private PosService posService;

    @Autowired
    private HttpSession session;

    private Cart getCart() {
        Cart cart = (Cart)session.getAttribute("cart");
        if(cart == null){
            cart = new Cart();
            setCart(cart);
        }
        return cart;
    }

    public void setCart(Cart cart) {
        session.setAttribute("cart", cart);
    }

    @Autowired
    public void setPosService(PosService posService) {
        this.posService = posService;
    }

    void setModel(Model model){
        Cart cart = getCart();
        model.addAttribute("total", cart.getTotal());
        model.addAttribute("products", posService.products());
        model.addAttribute("cart", cart);
    }

    @GetMapping("/")
    public String pos(Model model) {
        Cart cart = getCart();
        setCart(posService.add(cart, "PD1",2));
        setModel(model);
        return "index";
    }

    @GetMapping("/charge")
    public String charge(Model model) {
        Cart cart = getCart();
        setModel(model);
        posService.checkout(cart);
        return "index";
    }

    @GetMapping("/add")
    public String add(Model model,
                      @RequestParam String id,
                      @RequestParam int amount) {
        Cart cart = getCart();
        setCart(posService.add(cart, id, amount));
        setModel(model);
        return "index";
    }

    @GetMapping("/clear")
    public String clear(Model model) {
        Cart cart = getCart();
        cart.clear();
        setCart(cart);
        setModel(model);
        return "index";
    }
}
