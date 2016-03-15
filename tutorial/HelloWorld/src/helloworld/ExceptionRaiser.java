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
public class ExceptionRaiser {

    static void raiseException() {
        int[] wrong = new int[4];
        
        wrong[9] = 178;
    }
    
}
