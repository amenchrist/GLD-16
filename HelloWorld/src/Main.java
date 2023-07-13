import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
//		Scanner sc = new Scanner(System.in);
//		System.out.println("Enter a fruit");
//		
//		String inputValue = sc.nextLine();	
//		
//		System.out.println(ItemChecker.itemChecker(inputValue));
//		
//		do {
//			System.out.println("Enter another fruit");
//			inputValue = sc.nextLine();	
//			System.out.println(ItemChecker.itemChecker(inputValue));
//		}while (ItemChecker.itemChecker(inputValue) != "");
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a Number");
//		
		String inputValue = sc.nextLine();	
		int i = 1;
		int j = Integer.parseInt(inputValue);
		
		while(i<=j) {
			System.out.println("The value of i is "+ i);
			i++;
		}

	}

}
