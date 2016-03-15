/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package uk.co.millsconsulting.hangman;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 *
 * @author bdmills
 */
public class Hangman {

    private String[] dictionary = {
        "brian","mills","database","programmer","extrodinaire","but","currently","unemployed"
    };
    
    private String realWord;
    private char[] answer;
    private int guessesLeft = 10;
    private char[] soFar;
    
    public Hangman() {
        int randomNumber = (int)(Math.random() * dictionary.length);
        realWord = dictionary[randomNumber];
        System.out.println("the answer is " + realWord);
        
        answer = new char[realWord.length()];
        soFar = new char[realWord.length()];
        
        for (int i=0; i< realWord.length(); i++) {
            answer[i] = realWord.charAt(i);
            soFar[i] = '_';
        }
        
        System.out.print("The array is ");
        for (char c:answer) System.out.print(c);
        System.out.print("\n\n");
        

    }

    private void displaySoFar() {
        System.out.println("So far you have ");
        System.out.println(soFar);
        System.out.println("Failed guess left = " + (guessesLeft));
    }
    
    private void play()  {
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        char guess = '#';
        
        while (guessesLeft > 0 & !isComplete()) {
            displaySoFar();
            System.out.println("Enter you guess: ");
            try {
                guess = br.readLine().substring(0,1).charAt(0);
            } catch (IOException ex) {
                System.err.println("Error ");
                ex.printStackTrace();
            }

            updateSoFar(guess);
            if (!isCorrectGuess(guess)) guessesLeft--;
            
        }
        
        if (isComplete()) {
            System.out.println("YAY");
        } else {
            System.out.println("No - the answer is " + realWord);
        }
    }
    
    private boolean isCorrectGuess(char guess) {
        boolean isCorrect = false;
        for (char c:answer) {
            if (c == guess) {
                isCorrect = true;
                break;
            }
        }
        return isCorrect;
    }
    
    private boolean isComplete() {
        boolean complete = true;
        for (int i=0 ; i < answer.length; i++) {
            if (answer[i] != soFar[i]) {
                complete = false;
                break;
            }
        }
        return complete;
    }
    
    private void updateSoFar(char guess) {
        for (int i=0; i<soFar.length; i++) {
            if (answer[i] == guess) {
                soFar[i] = answer[i];
            } 
        }
    }
    
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Hangman hm = new Hangman();
        hm.play();
    }
    
    
    
}
