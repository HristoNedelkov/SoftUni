// 01. Mathematical expression.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <sstream>
#include <vector>
bool isLegitimateExpression() {
	char letter;
	int lBracket = 0;
	int rBracket = 0;
	while (std::cin >> letter) {
		if (letter == '(') { lBracket++; }
		else if (letter == ')') { rBracket++; }
	}
	if (lBracket == rBracket) { return true; }
	else { return false; }
}
int main()
{
	std::string res = isLegitimateExpression() ? "correct" : "incorrect";
	std::cout << res << std::endl;
}

