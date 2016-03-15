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
public class Sound {
    
    int x, y;
    
    Sound(int myX) {
        x = myX;
    }
    
    public static void main (String[] args) {
        double z;
        
        byte b;
        
        Sound s = new Sound(1);
            
        z = 10.2;

        b = (byte)s.x;
        
        System.out.println("x and y and b are " + s.x + " " + s.y + " " + b);
        
        System.out.println(doTest(s.x));

        System.out.println("x and y and b are " + s.x + " " + s.y + " " + b);

    }
    
    static boolean doTest(int x) {
        --x;
        return x==0;
    }
    
}
    

