/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */

/**
 *
 * @author Mariam Osama
 */

public class System1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        System.out.println("This program compares two values and print maximum value:");
        int x=18;
        int y=7;
        System.out.println(max_function(x,y));
    }

    public static int max_function(int a, int b) {
        int max_value = 0;
        if (a > b) {
            max_value = a;
        } else if (a < b) {
            max_value = b;
        } else {
            System.out.println("two values are equal==");
        }
        max_value = a;
        return max_value;
    }
}
