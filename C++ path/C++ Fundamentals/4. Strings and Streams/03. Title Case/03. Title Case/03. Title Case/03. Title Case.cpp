#include <iostream>
#include <string>
#include <sstream>

int main()
{
	std::string line;
	std::string word;
	std::getline(std::cin, line);   //To Input a String
	std::stringstream isstr(line);

	std::string res;
	while (isstr >> word){
		char a = word[0] - 32;
		word[0] = a;

		res += a;
		// You need to add the rest of the word: :))
		res += " ";

	}

	std::cout << res << std::endl;
	return 0;
}