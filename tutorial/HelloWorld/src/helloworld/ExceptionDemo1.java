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
public class ExceptionDemo1 {
    
    
    
    public static void main(String[] args) {
    
   
        
        try {
            ExceptionRaiser.raiseException();
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println(e.getMessage());
            for (StackTraceElement msg: e.getStackTrace()) {
                System.out.println(msg);
            }
        } finally {
            System.out.println("this is the finally bit");
        }
    }
}
