/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package helloworld;

import sun.misc.FDBigInteger;

/**
 *
 * @author bdmills
 */
public class FDemo {
    int x;

    public FDemo(int i) {
        x = i;
    }
    
    protected void finalize() {
        System.out.println("Finalizing at " + x);
    }
    
    void generator(int i) {
        FDemo o = new FDemo(i);
    }
}
