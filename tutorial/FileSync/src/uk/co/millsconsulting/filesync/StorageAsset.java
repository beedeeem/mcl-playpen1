/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package uk.co.millsconsulting.filesync;

/**
 *
 * @author bdmills
 */
abstract public class StorageAsset {
    
    protected String name;
    protected String location;

    public StorageAsset(String name, String location) {
        this.name = name;
        this.location = location;
    }
    
    
    public void copy() {
        
    }
    
}

