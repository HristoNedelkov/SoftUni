
#include <iostream>
#include <array>
#include <string>
#include <sstream>
#include <climits>

using namespace std;
int main()
{
	int nNums;
	cin >> nNums;
	cin.ignore();

	int num;
	string line;

	getline(cin, line);
	istringstream  sstr(line);

	int lastNum;
	sstr >> lastNum;
	int mostRepeatedCount = 0;
	int mostRepeatedNum;
	int currRepeats = 1;
	while (sstr >> num) {
		if (lastNum == num) {
			currRepeats++;
		}
		else {
			if (currRepeats > mostRepeatedCount) {
				mostRepeatedCount = currRepeats;
				mostRepeatedNum = lastNum;
			}
			lastNum = num;
		}

	}

	for (int i = 1; i <= mostRepeatedCount; i++) {
		cout << mostRepeatedNum << " ";
	}


}

