/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package helloworld;

/**
 *
 * @author bdmills
 */
public class Finalize {
    
    public static void main(String[] args) {
        int count;
        
        FDemo ob = new FDemo(0);
        System.out.println("start");
        for (count = 1; count < 1445642; count++) {
            ob.generator(count);
        }
        System.out.println("end");
    }
}
