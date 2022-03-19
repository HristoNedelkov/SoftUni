
#include <iostream>
#include <array>
#include <string>

int main()
{
	int size;
	int mostRepeated;
	int mostCount = 0;
	int arr[100];

	int indexInArr = 0;
	int mostRepeated[100];
	std::cin >> size;
	for (int i = 0; i < size; i++) {
		int integer;
		std::cin >> integer;
		arr[i] = integer;
	}

	//Here we next find the biggest count sequence
	for (int j = 0; j < size; j++) {
		int currNum = arr[j];
		int currCounts = 0;
		for (int a = 0; a < size; a++) {
			if (arr[a] == currNum) {
				currCounts++;
			}
		}
		if (currCounts >= mostCount) {		
			mostCount = currCounts;
		}

	}

	for (int j = 0; j < size; j++) {
		int currNum = arr[j];
		int currCounts = 0;
		for (int a = 0; a < size; a++) {
			if (arr[a] == currNum) {
				currCounts++;
			}
		}
		if (currCounts == mostCount) {
			mostRepeated[indexInArr] = currNum;

		}

	}
}

