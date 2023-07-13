
public class ItemChecker {

	public static String itemChecker (String item) {
		switch (item) {
		case "Banana": {
			return item +" would be £1.50";
		}
		case "Orange": {
			return item +" would be £2.50";
		}
		case "Kiwi": {
			return item +" would be £3.50";
		}
		case "Apples": {
			return item +" would be £4.50";
		}
		case "Plantain": {
			return item +" would be £5.50";
		}
		case "Cherries": {
			return item +" would be £6.50";
		}
		default: {
			return "We no av dat";
		}
	}
	}

}
