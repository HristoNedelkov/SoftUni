
#include <iostream>
#include <list>
#include <string>
#include <sstream>
#include <iterator>
#include <vector>
#include <algorithm>

void addNumberToVector(std::vector<int>& vc) {
	std::string numberString;
	std::string line;
	std::getline(std::cin, line);
	std::stringstream isst(line);
	
	while (isst >> numberString) {
		vc.push_back(stoi(numberString));
	}
}
std::string returnResVec(std::list <int>& resVec) {
	std::sort(resVec.begin(), resVec.end(),std::greater<int>());
	std::list<int>::iterator it;
	std::string res = "";
	 
	for (it = resVec.begin(); it != resVec.end(); ++it) {
		std::string a = std::to_string(*it);
		res += a;
		res += " ";
	}
	return res;
}
int main()
{
	std::vector<int> vec1;
	std::vector<int> vec2;
	std::string resultLine = "";
	std::list<int> resVec;
	addNumberToVector(vec1);
	addNumberToVector(vec2);

	int size = vec1.size() + vec2.size();
	std::string longerArr = vec1.size() >= vec2.size() ? "A" : "B";
	for (int i = size - 1; i >= 0; i--) {
		int i1 = vec1.size() - 1;
		int i2 = vec2.size() - 1;
		if (longerArr == "A" && vec2.empty()) {
			resVec.push_back(vec1[i]);
			vec1.pop_back();
			resultLine += "A";
			continue;
		}
		else if (longerArr == "B" && vec1.empty()) {
			resVec.push_front(vec2[i]);
			vec2.pop_back();
			resultLine += "B";
			continue;
		}

		if (vec1[i1] < vec2[i2]) {
			resVec.push_front(vec1[i1]);
			vec1.pop_back();
			resultLine += "A";
		}
		else {
			resVec.push_back(vec2[i2]);
			resultLine += "B";
			vec2.pop_back();

		}
	}
	std::cout << resultLine << std::endl;

	std::cout << returnResVec(resVec) << std::endl;
}

