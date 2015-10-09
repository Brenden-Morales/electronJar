import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Scanner;

/**
 * Created by brenden on 10/8/2015.
 */
public class maintest {
    public static void main(String [] args)
    {
        Scanner scanner = new Scanner(System.in);
        System.out.println("WAITING FOR COMMAND{input}");
        String response = scanner.next();
        System.out.println("response was: " + response);
    }
}
