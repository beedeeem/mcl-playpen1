/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package helloworld;

import java.io.*;

/**
 *
 * @author bdmills
 */
public class ShowFile {
    
    public static void main(String[] args) {

        final String fileName = "c:\\temp\\testfile.txt";
        final String fileName2 = "c:\\temp\\testfile2.txt";
        
        System.out.println("file name is " + fileName);
        
        int i;

        try(    FileInputStream fin = new FileInputStream(fileName);
                FileOutputStream fout = new FileOutputStream(fileName2,true) ) {

            do {
                i = fin.read();
                if (i != -1) {
                    System.out.print((char)i);
                    fout.write(i);
                }
            } while (i != -1);
           
        } catch (FileNotFoundException ex) {
            System.err.println("File not found");
        } catch (IOException ex) {
            System.err.println("Error reading file");
        }
        
        
    }
    
}
