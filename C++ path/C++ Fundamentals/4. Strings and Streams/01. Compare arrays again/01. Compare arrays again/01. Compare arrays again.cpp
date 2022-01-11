

#include <iostream>
#include <string>
#include <vector>
#include "array"
#include <sstream>

std::vector<int> readVector() {
	int number;
	std::string row;
	std::vector<int> arr;
	std::getline(std::cin, row);
	std::istringstream gosho(row);
	while (gosho >> number) {
		arr.push_back(number);
	}
	return arr;
}
bool areEqual(std::vector<int> arr1, std::vector <int> arr2) {
	if (arr1.size() != arr2.size()) return false;
	for (int i = 0; i <= arr1.size(); i++) {
		if (arr1[i] != arr2[i])return false;
	}
	return true;
}
int main()
{
	std::vector<int> arr1 = readVector();
	std::vector<int> arr2 = readVector();
	std::string res = areEqual(arr1, arr2) ? "equal" : "not equal";
	std::cout << res << std::endl;
}


