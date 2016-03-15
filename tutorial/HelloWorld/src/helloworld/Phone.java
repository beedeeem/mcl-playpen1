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
public class Phone implements Ringable {
    
    private int myNumber;
    private String brand;
    private String model;
    
    public void ring(int number) {
        System.out.println("Brrrrriiiiinnnnggggg " + number);
    }

    @Override
    public void text(int number) {
        System.out.println("Beeeeepppp " + number);
    }
    
    
}
