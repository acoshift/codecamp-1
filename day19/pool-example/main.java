class Main {
  public static void main(String[] args) {
    System.out.print(a());
  }

  static int a() {
    try {
      return 1;
    } catch (Exception e) {
      return 2;
    } finally {
      return 3;
    }
  }
}