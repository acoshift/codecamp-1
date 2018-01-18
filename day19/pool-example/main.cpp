#include <stdio.h>

class a {
public:
  a();
  ~a();
};

a::a() {
  printf("1\n");
}

a::~a() {
  printf("2\n");
}

int main() {
  a a;
}