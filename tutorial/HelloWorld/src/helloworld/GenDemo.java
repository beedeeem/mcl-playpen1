/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package helloworld;

import java.util.ArrayList;


class Gen<T> {
    T ob;
    
    Gen(T o){
        ob = o;
    }
    
    void showType() {
        System.out.println("The type of T is " + ob.getClass().getName());
    }
    
}

/**
 *
 * @author bdmills
 */
public class GenDemo {
    public static void main(String[] args) {
        
        Gen<Number> myGen = new Gen<>(13.0);
        myGen.showType();
        
        Gen<Gen> secondGen = new Gen<>(myGen);
        secondGen.showType();
    }
}
