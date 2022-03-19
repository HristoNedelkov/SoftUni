#include <iostream>
#include <array>
 

const int size = 100;

bool compareArrays(std::array <int,size> arr1, int length1, std::array <int,size> arr2, int length2) {
	if (length1 != length2) {
		return false;
	}

	for (auto i = 0; i < length1; i++) {
		if (arr1[i] != arr2[i]) {
			return false;
		}
	}
	return true;
}
int main()
{
	int size1;
	int size2;


	std::array<int, size> arr1;
	std::array<int, size> arr2;
	std::cin >> size1;
	for (int i = 1; i <= size1; i++) {
		int number;
		std::cin >> number;
		arr1[i - 1] = number;
	}
	std::cin >> size2;
	for (int j = 0; j < size2; j++) {
		int num;
		std::cin >> num;
		arr2[j] = num;
	}
	std::string res = compareArrays(arr1, size1, arr2, size2) == 1 ? "equal" : "Not equal";
	std::cout << res << std::endl;

}
