/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package uk.co.millsconsulting.filesync;

import java.io.File;
import java.util.ArrayList;

/**
 *
 * @author bdmills
 */
public class Library {
    
    private final String name;
    private final String rootLocation;
    private ArrayList<StorageAsset> assets;
    
    private File rootPath;

    public Library(String name, String root) {
        this.name = name;
        this.rootLocation = root;
        
        rootPath = new File(rootLocation);
    }
    
    public boolean isAssetExists(StorageAsset asset) {
        return true;
    }
    
    public void syncToLibrary(Library targetLib) {
        
    }
    
    public void syncFileSystem(String root) {
        
    }
    
}
