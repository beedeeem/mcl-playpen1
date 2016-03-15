/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package helloworld;

import java.time.DayOfWeek;
import java.time.temporal.TemporalAdjusters;
import static java.lang.System.out;

enum days {
        TUESDAY(1),MONDAY(2);
        
        days(int i) {
            System.out.println("the constructor for " + this.toString());
        }
}

/**
 *
 * @author bdmills
 */
public class EnumTest {
    
    days dayOfTheWeek;
    
    public static void main(String[] args) {
        EnumTest et = new EnumTest();
        EnumTest et2 = new EnumTest();
        et2.dayOfTheWeek = days.TUESDAY;
        et.dayOfTheWeek = days.MONDAY;
        
        out.println("the value of " + et.dayOfTheWeek + " is " + days.valueOf("monDay".toUpperCase()));
        
        if (et.dayOfTheWeek.compareTo(days.TUESDAY) < 0 ) {
            System.out.println("earlier");
        } else {
            System.out.println("later");
        }
        
        Integer myInt = 1;
        System.out.println("myInt is " + myInt);
        int j = myInt;
        System.out.println("j is " + j);
        testMethod(myInt);
        testMethod(j);
        
        System.out.println("myInt is " + myInt);
        System.out.println("j is " + j);
        
        
    }
    
    static void testMethod(Integer i) {
        System.out.println("Method says " + i);
        System.out.println("Method says " + i++);
        System.out.println("Method says " + ++i);
        
    }
}
