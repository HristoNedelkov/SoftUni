
#include <iostream>
#include <array>
#include <string>

int main()
{
	int size;
	int mostRepeated;
	int mostCount = 0;
	int arr[100];

	std::cin >> size;
	for (int i = 0; i < size; i++) {
		int integer;
		std::cin >> integer;
		arr[i] = integer;
	}

	for (int j = 0; j < size; j++) {
		int currNum = arr[j];
		int currCounts = 0;
		for (int a = 0; a < size; a++) {
			if (arr[a] == currNum) {
				currCounts++;
			}

		}
		if (currCounts >= mostCount) {
			mostRepeated = currNum;
			mostCount = currCounts;
		}

	}

	std::cout << mostRepeated << " - That's the most repeated number," << std::endl;
	std::cout << mostCount << " - That's the count;" << std::endl;

	std::string res = "";

	for (int f = 0; f < mostCount; f++) {
		res += std::to_string(mostRepeated);
		res += " ";
	}

	std::cout << res;

}

