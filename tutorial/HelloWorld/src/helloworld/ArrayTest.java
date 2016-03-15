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
public class ArrayTest {

    int y;
    
    public static void main(String[] args) {

        String source = "123456789";
        
        System.out.println("start is    " + source);
        
        ArrayTest at = new ArrayTest();
        
        String reversed = at.reverse(source);
        
        System.out.println("reversed is " + reversed);
        
    }
    
    public String reverse(String source) {
       
        if (source.length() == 1) {
            return source;
        } else {
            return source.substring(source.length() -1) + reverse(source.substring(0,source.length() -1 ) );
        }

    }
}

