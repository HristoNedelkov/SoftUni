#include <iostream>
using namespace std;
int main()
{
	string input;
	cin >> input;

	for (int i = 0; i < input.length(); i++) {
		string letter; cin >> input[i];
		cout << letter << endl;
	}

}
