/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package uk.co.millsconsulting.screenscraper;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;


/**
 *
 * @author bdmills
 */
public class UrlReader {

    static private InputStream read(URL webpage) {
        
        InputStream stream = null;
        
        try {
            HttpURLConnection httpCon = (HttpURLConnection)webpage.openConnection();
            httpCon.addRequestProperty("User-Agent", "Mozilla/4.0");
            
            stream = httpCon.getInputStream();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        return stream;
    }
    
    public static void main (String[] args) throws Exception {
        URL webpage = new URL("http://www.totaljobs.com/JobSearch/JobDetails.aspx?JobId=64960714");
        
        BufferedReader in = new BufferedReader(new InputStreamReader(read(webpage)));
        BufferedWriter out = new BufferedWriter(new OutputStreamWriter(new FileOutputStream("c:\\temp\\job_1.txt")));
        
        String inputLine;
        boolean writeOutput = true;
        
        while((inputLine = in.readLine()) != null) {
            System.out.println(inputLine);
//            if (inputLine.contains("<tbody>")) {
//                writeOutput = true;
//            }
            
            if (writeOutput) out.write(inputLine + "\n");
            
//            if (inputLine.contains("</tbody>")) {
//                writeOutput = false;
//            }

        }
        in.close();
        out.close();
    }
    
}
