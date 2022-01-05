#include <iostream>;
using namespace std;


int main() {
	string input;
	cin >> input;
	for (int i = 1; i < input.length(); i++) {
		
		char letter = input[i];
		cout << letter << endl;
	}

}